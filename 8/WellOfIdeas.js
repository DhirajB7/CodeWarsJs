const well = (x) => {
    const goodCount = x.filter(a =>a==="good").length
    return goodCount===0 ? "Fail!" : goodCount > 0 && goodCount < 3 ? "Publish!" : "I smell a series!"
}