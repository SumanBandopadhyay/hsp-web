export function fetchCategories (context) {
    const categories = [
        {
            title: 'Plumbing',
            img: 'https://placeimg.com/500/300/nature'
        },
        {
            title: 'Electrical',
            img: 'https://placeimg.com/500/300/nature'
        },
        {
            title: 'Electrical',
            img: 'https://placeimg.com/500/300/nature'
        }
    ]
    context.commit('setCategories', categories)
}
