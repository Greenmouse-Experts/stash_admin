
import { NextResponse } from 'next/server';


export function errorHandlingMiddleware(handler) {
  return async (req, res) => {
    try {
      // Call the API handler
      const response = await handler(req, res);

      // Check for any errors in the API response
      if (!response.ok) {
        // Handle the error based on the response status code or message
        if (response.status === 403) {
          return new NextResponse.forbidden('Access Denied');
        }
        if (response.status === 404) {
          return new NextResponse.notFound('Not Found');
        }

        // Handle other error cases
        // You can customize the error messages or response codes as per your requirements
        return new NextResponse.error('API Error');
      }

      // Return the successful API response
      return response;
    } catch (error) {
      // Handle any unexpected errors
      console.error('API Error:', error);
      return new NextResponse.error('Internal Server Error');
    }
  };
}