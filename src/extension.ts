/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider('markdown', new MDBase64er(), {
			providedCodeActionKinds: MDBase64er.providedCodeActionKinds
		}));
}

/**
 * Provides code actions for converting base64 code to ![][image-id] and append base64 code to text's last line.
 */
export class MDBase64er implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	public provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] | undefined {
		if (!this.isAtStartOfSmiley(document, range)) {
			return;
		}
		const replaceWithImageID = this.createFix(document, range);
		replaceWithImageID.isPreferred = true;
		return [replaceWithImageID,];
	}

	private isAtStartOfSmiley(document: vscode.TextDocument, range: vscode.Range) {
		const start = range.start;
		const content = document.lineAt(start.line).text;
		return content.indexOf('data:image/*;base64,') > -1 && content.indexOf('[') != 0;
	}

	private createFix(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction {
		const fix = new vscode.CodeAction(`Replace IMG ID`, vscode.CodeActionKind.QuickFix);
		fix.edit = new vscode.WorkspaceEdit();
		console.log("start ", range.start);
		console.log("end ", range.end);
		const time_id = Date.now().toString();
		console.log(time_id);
		const image_id = '\r\n\r\n![][' + time_id + '.jpg]\r\n';
		fix.edit.replace(document.uri, new vscode.Range(new vscode.Position(range.start.line, 0), new vscode.Position(range.start.line, document.lineAt(range.start.line).text.length)), image_id);
		fix.edit.insert(document.uri, new vscode.Position(document.lineCount, 0), '\r\n\r\n' + '[' + time_id + '.jpg]:' + document.lineAt(range.start.line).text);
		return fix;
	}
}
