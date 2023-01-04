let title="",url="",isImportant=false,allBookmarks=[];

window.addEventListener("load",(e) => {
    loadBookmarks()
})

function bookmarkModel(title,url,isImportant){
    this.title = title
    this.url = url
    this.isImportant = isImportant
}

const addBookmark = e => {
    e.preventDefault()
    title = document.getElementById("title").value
    url = document.getElementById("link").value
    isImportant = document.getElementById("important").checked
    if(!validateInputs()){
        return false
    }

    if(!addToLocalhost()){
        return false
    }

    title="",url="",isImportant=false
}

const validateInputs = () => {
    document.getElementById("title").style.borderColor = "transparent"
    document.getElementById("link").style.borderColor = "transparent"
    if(title !== "" && url !== ""){
        return true
    }

    if(title === "") {
        document.getElementById("title").style.borderColor = "red"
        return false
    }else if(url === ""){
        document.getElementById("link").style.borderColor = "red"
        return false
    }
    
    return true
}

const addToLocalhost = () => {
    if(typeof window === "undefined"){
        return false
    }

    let newBookmark = new bookmarkModel(title,url,isImportant)
    let importantSect = document.getElementById("importantMarks")
    let normalSect = document.getElementById("normalMarks")

    if(localStorage.getItem("bookmarks")){
        let prevBookmarks = JSON.parse(localStorage.getItem("bookmarks"))
        prevBookmarks.push(newBookmark)
        localStorage.setItem("bookmarks",JSON.stringify(prevBookmarks))
    }else{
        let bookmarks = [newBookmark]
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    }

    if(newBookmark.isImportant){
        importantSect.appendChild(bookmarkStructure(title,url,isImportant))
    }else{
        normalSect.appendChild(bookmarkStructure(title,url,isImportant))
    }

    return true
}

const getBookmarks = () => {
    if(typeof window === "undefined"){
        return false
    }
    let promise  = new Promise((resolve,reject)=>{
        if(localStorage.getItem("bookmarks")){
            allBookmarks = JSON.parse(localStorage.getItem("bookmarks"))
            resolve(allBookmarks)
        }else{
            reject("Faild to access localhost!")
        }
    })

    return promise
}

const loadBookmarks = () => {
    let importantSect = document.getElementById("importantMarks")
    let normalSect = document.getElementById("normalMarks")
    getBookmarks().then(res=>{
        res.map((item,i)=>{
            if(item.isImportant){
                importantSect.appendChild(bookmarkStructure(item.title,item.url,item.isImportant))
            }else{
                normalSect.appendChild(bookmarkStructure(item.title,item.url,item.isImportant))
            }
        })
    }).catch(error=>console.log(error))
}

const bookmarkStructure = (title,url,isImportant) => {
    let wrapper  = document.createElement('div')
    wrapper.className="bookmark"

    let h1 = document.createElement('h1')
    h1.innerText = title

    let h3 = document.createElement('h3')
    h3.innerText = url

    let hr = document.createElement('hr')

    let span = document.createElement('span')
    span.className = "importantTitle"

    let i = document.createElement('i')
    i.className = "fa-solid fa-star"

    let closeIcon = document.createElement('i')
    closeIcon.className = "fa-solid fa-xmark"
    closeIcon.style.pointerEvents = "none"
    let closeDiv = document.createElement("div")
    closeDiv.className = "deleteBookmark"
    closeDiv.id = title
    closeDiv.addEventListener('click',handleClick)
    closeDiv.appendChild(closeIcon)

    let containerDiv = document.createElement("div")
    containerDiv.className = `containerDiv`
    containerDiv.id = `${title}Container`

    let a = document.createElement('a')
    a.href = url
    a.target = "_blank"

    containerDiv.appendChild(closeDiv)

    if(isImportant){
        closeDiv.classList.add("deleteImportantBookmark")
        wrapper.classList.add("importantMark")
        span.appendChild(i)
        span.appendChild(h1)
        wrapper.appendChild(span)
        wrapper.appendChild(hr)
        wrapper.appendChild(h3)
        a.appendChild(wrapper)
    }else{
        wrapper.appendChild(h1)
        wrapper.appendChild(hr)
        wrapper.appendChild(h3)
        a.appendChild(wrapper)       
    }
    containerDiv.appendChild(a)
    return containerDiv
}

const handleClick = e => {
    removeBookmarkFromLocalhost(e.target.id).then(res=>{
        removeBookmarkFromDOM(e.target.id)
    },reject=>{
        console.log(reject);
    })    
}

const removeBookmarkFromLocalhost = bookmark => {
    if(typeof window === "undefined"){
        return false
    }

    let promise = new Promise(function(resolve,reject){
        if(localStorage.getItem("bookmarks")){
            localStorage.setItem("bookmarks",
                JSON.stringify(
                    JSON.parse(
                        localStorage.getItem("bookmarks")
                    ).filter((elm) => elm.title !== bookmark)
                )
            )
            resolve("Bookmark removed successfully!")
        }else{
            reject("Faild to access Local-Storage!")
        }
    })

    return promise
}

const removeBookmarkFromDOM = bookmark => {
    let id = bookmark+"Container"
    document.getElementById(id).remove()
}

const expandSect = section => {
    if(section === "imp"){
        document.getElementById("importantMarks").style.height = "max-content"
        document.getElementById("importantMarks").style.overflow = "visible"
        document.getElementById("importantMarks").style.transition = "0.3s ease-in-out"
        document.getElementById("impExpand").style.display = "none"
        document.getElementById("impMin").style.display = "block"
    }else{
        document.getElementById("normalMarks").style.height = "max-content"
        document.getElementById("normalMarks").style.overflow = "visible"
        document.getElementById("normalMarks").style.transition = "0.3s ease-in-out"
        document.getElementById("normExpand").style.display = "none"
        document.getElementById("normMin").style.display = "block"
    }
}

const minimizeSect = section => {
    if(section === "imp"){
        document.getElementById("importantMarks").style.height = "60px"
        document.getElementById("importantMarks").style.overflow = "hidden"
        document.getElementById("importantMarks").style.transition = "0.3s ease-in-out"
        document.getElementById("impExpand").style.display = "block"
        document.getElementById("impMin").style.display = "none"
    }else{
        document.getElementById("normalMarks").style.height = "60px"
        document.getElementById("normalMarks").style.overflow = "hidden"
        document.getElementById("normalMarks").style.transition = "0.3s ease-in-out"
        document.getElementById("normExpand").style.display = "block"
        document.getElementById("normMin").style.display = "none"
    }
}