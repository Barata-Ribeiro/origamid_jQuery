$("textarea").on("keyup paste", function () {
    const self = this;
    setTimeout(function () {
        const textValue = $(self).val(),
            textLength = textValue.length,
            charactersResult = $(".caracteres"),
            wordsResult = $(".palavras"),
            words = textValue.trim() ? textValue.trim().split(/\s+/).length : 0;

        charactersResult.text(textLength);
        wordsResult.text(words);
    }, 200);
});
