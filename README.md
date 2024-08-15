
# Images Gallery

A Flask-based web application for fetching and managing images from the Unsplash API. The application allows users to retrieve random images based on a search query and store or delete them in a MongoDB database.

## Features

- **Fetch Random Images**: Get images from Unsplash using a search query.
- **Store Images**: Save fetched images to a MongoDB collection.
- **Delete Images**: Remove images from the MongoDB collection.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RMBChinmaya/images-gallery.git
   cd images-gallery
   ```

2. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the project root and add your Unsplash API key:

   ```bash
   UNSPLASH_KEY=your_unsplash_api_key_here
   DEBUG=True
   ```

4. **Run the application:**

   ```bash
   python main.py
   ```

   The application will start on `http://0.0.0.0:5050`.

## Endpoints

- **`GET /new-image`**: Fetch a random image from Unsplash based on a query parameter.
  
  - **Query Parameters**:
    - `query`: The search term for fetching images.

- **`GET /images`**: Retrieve all stored images from the MongoDB database.

- **`POST /images`**: Save an image to the MongoDB database.

  - **Payload**:
    - JSON object representing the image data.

- **`DELETE /images/<image_id>`**: Delete an image from the MongoDB database using its ID.

## Requirements

- Python 3.x
- Flask
- Flask-CORS
- Python-dotenv
- Requests
- MongoDB (with `mongo_client` configured)

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
