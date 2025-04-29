$(document).ready(function () {
    $(".faqbox").click(function () {
        // Close any open answer
        $(".faqbox").not(this).removeClass("active");
        $(".faqbox").not(this).find("svg").css("transform", "rotate(0deg)");
        $(".faqbox").not(this).next("p").slideUp();

        // Toggle current answer
        $(this).toggleClass("active");
        $(this).next("p").slideToggle();

        // Rotate plus icon
        let icon = $(this).find("svg");
        if ($(this).hasClass("active")) {
            icon.css("transform", "rotate(45deg)");
        } else {
            icon.css("transform", "rotate(0deg)");
        }
    });

    // Add FAQ answers dynamically
    $(".faqbox").each(function () {
        let answerText = "";
        switch ($(this).text().trim()) {
            case "What is Netflix?":
                answerText = "Netflix is a streaming service that offers a variety of TV shows, movies, anime, and more.";
                break;
            case "How much does Netflix cost?":
                answerText = "Netflix has different plans ranging from ₹149 to ₹649 per month.";
                break;
            case "What can I watch on Netflix?":
                answerText = "You can watch unlimited movies, TV shows, documentaries, and more.";
                break;
            case "Where can I watch?":
                answerText = "You can watch on your phone, tablet, laptop, and TV.";
                break;
            case "How do I cancel?":
                answerText = "You can cancel your Netflix subscription anytime from your account settings.";
                break;
            case "Is Netflix good for kids?":
                answerText = "Yes, Netflix has a Kids section with family-friendly content.";
                break;
        }
        $(this).after(`<p class='faq-answer'>${answerText}</p>`);
        $(".faq-answer").hide(); // Hide answers initially
    });
});
