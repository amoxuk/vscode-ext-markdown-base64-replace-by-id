// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "helloworld-web-sample" is now active in the web extension host!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	let disposable = vscode.commands.registerCommand('helloworld-web-sample.helloWorld', () => {
// 		// The code you place here will be executed every time your command is executed

// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello World from helloworld-web-sample in a web extension host!');
// 	});

// 	context.subscriptions.push(disposable);
// }
// /*---------------------------------------------------------
//  * Copyright (C) Microsoft Corporation. All rights reserved.
//  *--------------------------------------------------------*/


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

// this method is called when your extension is deactivated
export function deactivate() {}
