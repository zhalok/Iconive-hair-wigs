# from PIL import Image

# def get_image_size(image_path):
#     try:
#         with Image.open(image_path) as img:
#             width, height = img.size
#             return width, height
#     except FileNotFoundError:
#         print("Image file not found.")
#     except Exception as e:
#         print("Error occurred:", e)

# # Replace 'your_image.jpg' with the path to your image file
# image_path = 'public/favicon.ico'

# dimensions = get_image_size(image_path)
# if dimensions:
#     print(f"Image size: {dimensions[0]}x{dimensions[1]} pixels")
