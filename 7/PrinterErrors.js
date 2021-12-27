const printerError = (data) => {
    const totalLength = data.length
    return `${data.replace(/[a-m]/g,"").length}/${totalLength}`
}