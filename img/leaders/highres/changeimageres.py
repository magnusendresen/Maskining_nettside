from PIL import Image
import os

def changeimageres(path, quality=85):
    try:
        print(f"Processing image: {path}")
        img = Image.open(path)
        img = img.resize((800, 800))  # Resize image to 800x800 pixels
        new_path = os.path.join("resized", os.path.basename(path))
        os.makedirs(os.path.dirname(new_path), exist_ok=True)
        img.save(new_path, quality=quality)
        print(f"Saved resized image to: {new_path} with quality={quality}")
        return new_path
    except Exception as e:
        print(f"Error processing image {path}: {e}")
        return None

def process_images_in_directory(directory, quality=85):
    try:
        for filename in os.listdir(directory):
            if filename.lower().endswith((".png", ".jpg", ".jpeg")):
                changeimageres(os.path.join(directory, filename), quality)
    except Exception as e:
        print(f"Error processing directory {directory}: {e}")

# Example usage
process_images_in_directory(os.path.dirname(__file__), quality=85)
