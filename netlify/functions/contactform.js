exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: { 'Allow': 'POST' }
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false,
          message: 'Missing required fields'
        })
      };
    }

    // In a production environment, you might:
    // 1. Save to a database
    // 2. Send an email notification
    // 3. Set up autoresponder
    
    console.log('Contact form submission:', data);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message received! We will get back to you soon.'
      })
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        message: 'Server error processing your request'
      })
    };
  }
};