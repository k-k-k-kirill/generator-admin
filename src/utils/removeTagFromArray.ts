const removeTagFromArray = (tagArray: any, tag: any) => {
    return tagArray.filter((item: any) => item.value !== tag.value)
}

export default removeTagFromArray;