export const calculateSimilarity = (string1, string2) => {
    // Tokenize strings into arrays of words
    const words1 = string1.split(/\s+/);
    const words2 = string2.split(/\s+/);

    // Count occurrences of each word in both strings
    const wordCount1 = countWords(words1);
    const wordCount2 = countWords(words2);

    // Calculate the number of common words
    const commonWords = countCommonWords(wordCount1, wordCount2);

    // Calculate similarity as the number of common words divided by the total unique words
    const similarity = commonWords / (new Set([...words1, ...words2]).size);

    return similarity;
}

export const countWords = (words) =>{
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return wordCount;
}

export const countCommonWords = (wordCount1, wordCount2) => {
    let commonWords = 0;
    for (const word in wordCount1) {
        if (wordCount2.hasOwnProperty(word)) {
            commonWords += Math.min(wordCount1[word], wordCount2[word]);
        }
    }
    return commonWords;
}