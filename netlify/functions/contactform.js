// Netlify serverless function to handle contact form submissions
exports.handler = async (event, context) => {
  // Enable CORS for frontend requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    };
  }

  // Ensure we're handling a POST request
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    const { name, email, subject, message } = data;

    // Simple validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // In a real implementation, you would:
    // 1. Send this data to an email service (like SendGrid, Mailgun, etc.)
    // 2. Store it in a database
    // 3. Process it further as needed

    // For now, we'll just log and respond with success
    console.log('Contact form submission:', { name, email, subject, message });

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Thank you for your message! We will get back to you soon.',
        data: { name, email, subject }
      })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to process your request' })
    };
  }
};