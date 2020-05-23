#!/usr/bin/env python3

from email.message import EmailMessage
import os.path
import mimetypes
import smtplib
import getpass
from reportlab.platypus import SimpleDocTemplate
from reportlab.platypus import Paragraph, Spacer, Table, Image
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from reportlab.graphics.shapes import Drawing
from reportlab.graphics.charts.piecharts import Pie
# from reportlab.pdfgen import canvas
from reportlab.lib.units import inch, cm
# from reportlab.lib.pagesizes import A4

def construct_email():

  message = EmailMessage()
  sender = "me@example.com"
  recipient = "you@example.com"
  message['From'] = sender
  message['To'] = recipient
  message['Subject'] = 'Greetings from {} to {}!'.format(sender, recipient)
  body = """Hey there!

  I'm learning to send emails using Python!"""
  message.set_content(body)

  attachment_path = "./ortex.jpeg"
  attachment_filename = os.path.basename(attachment_path)
  mime_type, _ = mimetypes.guess_type(attachment_path)
  mime_type, mime_subtype = mime_type.split('/', 1)
  # print(mime_type + "/" + mime_subtype)

  with open(attachment_path, 'rb') as ap:
    message.add_attachment(ap.read(),
                            maintype=mime_type,
                            subtype=mime_subtype,
                            filename=os.path.basename(attachment_path))
  print(message)

def send_email(sender, message):
  mail_server = smtplib.SMTP('localhost')
  # mail_server = smtplib.SMTP_SSL('smtp.example.com')
  mail_server.set_debuglevel(1)
  mail_pass = getpass.getpass('Password? ')
  mail_server.login(sender, mail_pass)
  mail_server.send_message(message)
  mail_server.quit()

def generate_pdf():
  fruit = {
    "elderberries": 1,
    "figs": 1,
    "apples": 2,
    "durians": 3,
    "bananas": 5,
    "cherries": 8,
    "grapes": 13
  }
  report = SimpleDocTemplate("./report.pdf")
  styles = getSampleStyleSheet()
  report_title = Paragraph("A Complete Inventory of My Fruit", styles["h1"])

  table_data = []
  for k, v in fruit.items():
    table_data.append([k, v])
  table_style = [('GRID', (0,0), (-1,-1), 1, colors.black)]
  report_table = Table(data=table_data, style=table_style, hAlign="LEFT")


  report_pie = Pie(width=3*inch, height=3*inch)
  report_pie.data = []
  report_pie.labels = []
  for fruit_name in sorted(fruit):
    report_pie.data.append(fruit[fruit_name])
    report_pie.labels.append(fruit_name)
  print(report_pie)
  report_chart = Drawing()
  report_chart.add(report_pie)

  report.build([report_title, report_table, report_chart])

