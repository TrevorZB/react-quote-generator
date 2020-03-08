f1 = open("quotes.js", "r")
f2 = open("quotes-new.js", "w")

content = f1.read()

content_id = ""
i = 0
for c in content:
    if c == "{":
        content_id = content_id + c + "\n    " + "id: " + str(i) + ","
        i = i + 1
    else:
        content_id = content_id + c

f2.write(content_id)

f1.close()
f2.close()
