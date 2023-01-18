import { Configuration, OpenAIApi } from "openai";

export async function getGPT3Response(prompt: string) {
  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        prompt,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
      
    const responseText = await response.data.choices[0].text;

    if (responseText) {
      return removeEmptyLinesAtStart(responseText);
    } else {
      return null;
    }

  } catch (error) {
    console.error(error);
  }
}

function removeEmptyLinesAtStart(str: string): string {
    const lines = str.split('\n');

    let i = 0;
    while (i < lines.length && lines[i].trim() === '') {
        i++;
    }

    return lines.slice(i).join('\n');
}
