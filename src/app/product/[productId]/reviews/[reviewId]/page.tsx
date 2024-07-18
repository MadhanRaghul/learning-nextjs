export default function ReviewDetail({ params }:{
    params: {
        productId: string
        reviewId: string
    }
}){
    return <h1>Review {params.productId} for product {params.reviewId}</h1>
}