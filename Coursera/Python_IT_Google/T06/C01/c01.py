from PIL import Image
im = Image.open("ikea.png")
im.rotate(45).show()



# im = Image("example.jpg")
# new_im = im.resize((640,480))
# new_im.save("example_resized.jpg")

# im = Image("example.jpg")
# new_im = im.rotate(90)
# new_im.save("example_rotated.jpg")

# im = Image("example.jpg")
# im.rotate(180).resize((640,480)).save("flipped_and_resized.jpg")