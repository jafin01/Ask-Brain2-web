const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openai.com/v1/chat/completions';

const sendMessage = async (messages: { content: string; role: string }[]) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages.filter((message) => message.content),
      }),
    });

    const data = await response.json();

    const reply = data.choices[0].message.content;

    return reply;
  } catch (error) {
    console.error('Error:', error);
  }
  return null;
};

export default sendMessage;
