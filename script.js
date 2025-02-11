async function generateImage() {
    const prompt = document.getElementById('promptInput').value;
    const apiUrl = 'https://api-inference.huggingface.co/models/your-model-name'; // আপনার মডেলের নাম দিয়ে প্রতিস্থাপন করুন
    const headers = {
        'Authorization': 'Bearer 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', // নতুন টোকেন এখানে যুক্ত করুন
        'Content-Type': 'application/json'
    };
    const data = {
        inputs: prompt
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const result = await response.json();
        console.log(result); // API রেসপন্স কনসোলে দেখুন

        // API রেসপন্স অনুযায়ী ইমেজ URL এক্সট্র্যাক্ট করুন
        const imageUrl = result[0].generated_image; // রেসপন্স স্ট্রাকচার অনুযায়ী এডজাস্ট করুন
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
    } catch (error) {
        console.error('Error generating image:', error);
    }
}
