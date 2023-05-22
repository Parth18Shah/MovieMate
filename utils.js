function formatReviewsData(reviewsData) {
    return reviewsData.map(review => {
        const createdAt = new Date(review.created_at);
        const formattedDate = createdAt.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
        const formattedTime = createdAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        console.log("formattedDate", formattedDate);
        console.log("formattedTime", formattedTime);
        return {
            ...review,
            formattedDate,
            formattedTime
        };
    });
}

module.exports = {
    formatReviewsData
};