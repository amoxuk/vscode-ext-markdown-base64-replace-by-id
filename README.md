# Markdown Base64 Image ID

this is markdown ext to replace base64 code by `![][image-id]` and append base64 code to the text's last line.
the image id is always a timestamp and it is alse appended to the text's last line.

![](https://raw.githubusercontents.com/amoxuk/vscode-ext-markdown-base64-replace-by-id/main/show.gif)

example:

```md

input some base64 code as after:
data:image/*;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAfAToDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2ClopK3OQWiiigApKKWmMSlopKACilooAKSlpKQC0UUlABS0UlABS0UlABRRSUDFpKWkoAWikpaAEpaKSgBaKSjFAC0lLSUAFFLSUwClopKAFooooAKSiloASjPvS0mPagBaWkopEi0lLSUALRRRTGFJSikoAWiikoAWijrSdqQC0lFLQAUlFLQAlLSUtACUUdKKBiUtJS0AJRS0lABS0lLQAUnelpKAFpKWjtQAUlFFMApaSigBaSlpKAFooooAKT8KUUmfagD//2Q==

```

then you can use vsc action to replace with after

```md

input some base64 code as after:


![][1651598753.jpg]


[1651598753.jpg]: data:image/*;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAfAToDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2ClopK3OQWiiigApKKWmMSlopKACilooAKSlpKQC0UUlABS0UlABS0UlABRRSUDFpKWkoAWikpaAEpaKSgBaKSjFAC0lLSUAFFLSUwClopKAFooooAKSiloASjPvS0mPagBaWkopEi0lLSUALRRRTGFJSikoAWiikoAWijrSdqQC0lFLQAUlFLQAlLSUtACUUdKKBiUtJS0AJRS0lABS0lLQAUnelpKAFpKWjtQAUlFFMApaSigBaSlpKAFooooAKT8KUUmfagD//2Q==


```
## Note!!!

It's easier to use with python clipboard script!!!

```python

## image to base64

## screencap app: snipaste

import base64
import time
from io import BytesIO
from PIL import Image, ImageGrab
import win32clipboard

def pil():
    pre = 0
    while 1:
        seq = win32clipboard.GetClipboardSequenceNumber()
        if pre == seq:
            time.sleep(0.02)
            continue
        else:
            pre = seq
        # save image
        try:

            img = ImageGrab.grabclipboard()
            if isinstance(img, Image.Image):
                buffer = BytesIO()
                img.save(buffer, 'jpeg')
                b64str = base64.b64encode(buffer.getvalue())
                print(len(b64str))
                # print(b64str, '\n', end='\r')
                b64str = f'data:image/*;base64,{b64str.decode()}'
                # set clipboard
                win32clipboard.OpenClipboard()
                win32clipboard.SetClipboardText(b64str)
                win32clipboard.CloseClipboard()
                # update seq
                pre = win32clipboard.GetClipboardSequenceNumber()
                buffer.close()
        except:
            pass


if __name__ == '__main__':
    pil()

```


---

reference: [vscode-extension-samples](https://github.com/microsoft/vscode-extension-samples/tree/main/code-actions-sample)
