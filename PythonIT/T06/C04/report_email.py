#!/usr/bin/env python3
import reports
import emails
import os
import datetime

src = "./supplier-data/descriptions/"

def generate_para():
# read all images
  fileslist = []
  for root, dirs, files in os.walk(src):
    for name in files:
      if str(name).endswith(".txt"):
        fileslist.append(name)

  data_list = []
  for file in fileslist:
    with open(src + file, 'r') as f:
      lines = []
      for line in f.readlines():
        lines.append(line)
      
      data_list.append("name: {}<br />weight: {}<br />".format(
        str(lines[0]).strip(), str(lines[1]).strip()) )
  return data_list

if __name__ == "__main__":
  data_list = generate_para()
  para = "<br />".join(data_list) 
  # PDF
  attachment = "/tmp/processed.pdf"  
  # attachment = "./processed.pdf"
  title = "Processed Update on {}".format(datetime.datetime.now().strftime("%b %d, %Y") )
  reports.generate_report(attachment, title, para)

  # email 
  sender = "automation@example.com"
  receiver = "{}@example.com".format(os.environ.get('USER'))
  subject = "Upload Completed - Online Fruit Store"
  body = para.replace("<br />", "\n")

  message = emails.generate(sender, receiver, subject, "<h1>" + title + "</h1>\n\n" + body, attachment)
  emails.send(message)
  print(message)