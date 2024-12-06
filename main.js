const submit = document.getElementById("submit");
const textArea = document.getElementById("textArea");
const addComment = document.getElementById("addComment");
const allComents = document.querySelector(".allComents");
submit.addEventListener("click",function () {
    if(textArea.value != "") {
        // creat comment div 
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment")
        // create mainComment div
        let mainComment = document.createElement("div");
        mainComment.classList.add("mainComment")
        mainComment.classList.add("me")
        // create vote div 
        let vote = document.createElement("div");
        vote.className = "vote";
        let plusSpan = document.createElement("span");
        plusSpan.className = "plusSubmite"
        let plusImg = document.createElement("img");
        plusImg.src = "./images/icon-plus.svg";
        let minsSpan = document.createElement("span");
        let minsImg = document.createElement("img");
        minsImg.src = "./images/icon-minus.svg";
        minsSpan.className = "minssubmit"
        let numSpan = document.createElement("span");
        numSpan.className = "num"
        numSpan.innerHTML = "0"
        plusSpan.append(plusImg)
        minsSpan.append(minsImg)
        vote.append(plusSpan)
        vote.append(numSpan)
        vote.append(minsSpan);
        // create content div 
        let content = document.createElement("div");
        content.classList.add("content");
            // create header div 
            let header = document.createElement("div");
            header.className = "header"
                // create the header content 
                let headerImg = document.createElement("img");
                headerImg.src = addComment.dataset.img;
                let h2 = document.createElement("h2");
                h2.innerHTML = addComment.dataset.name;

                let you = document.createElement("div");
                you.innerHTML = "you";
                you.className = "you";
                let date = document.createElement("span");
                date.className = "date";
                date.innerHTML = "1 minute ago";

                let reply = document.createElement("div");
                reply.classList.add("repl");
                    // reply content 
                    let divOne = document.createElement("div");
                    divOne.className = "deltedSubmit"
                    divOne.innerHTML = `<img src="./images/icon-delete.svg""/>delete`
                    let divTwo = document.createElement("div");
                      divTwo.className = "editeSubmit"
                    divTwo.innerHTML = `<img src="./images/icon-edit.svg"/>edite`
                reply.append(divOne);
                reply.append(divTwo);

                let p = document.createElement("p");
                p.className = "text";
                p.innerHTML = textArea.value;
                header.append(headerImg);
                header.append(h2);
                header.append(you);
                header.append(date);
                header.append(reply);
                content.append(header);
                content.append(p);
        mainComment.append(vote)
        mainComment.append(content)
        commentDiv.append(mainComment);
        allComents.appendChild(commentDiv);
        textArea.value = "";
        let plusSubmite = document.querySelectorAll(".plusSubmite");
        let minssubmit = document.querySelectorAll(".minssubmit");
        let editeSubmit = document.querySelectorAll(".editeSubmit");
        let deltedSubmit = document.querySelectorAll(".deltedSubmit");
        plusFun(plusSubmite);
        minsFun(minssubmit)
        editeFun(editeSubmit)
        deletedfun(deltedSubmit)
    }
});
function replying() {
    let replayBtns = document.querySelectorAll(".reply");
replayBtns.forEach((reply) => {
    reply.addEventListener("click", function (e) {
        let clonedComment = addComment.cloneNode(true);
        if(e.target.tagName == "DIV") {
            let parent = e.target.parentElement.parentElement.parentElement.parentElement;
            let clonedTextArea = clonedComment.children[1];
            let tagName = e.target.parentElement.children[1];
            let clonedBtn = clonedComment.children[2];
            clonedBtn.className = "cloned"
            clonedBtn.id ="";
            clonedBtn.innerHTML = "reply";
            clonedTextArea.value = "@"+tagName.innerHTML+" ";
            clonedComment.setAttribute("data-tag",`@${tagName.innerHTML} `)
            parent.append(clonedComment);
            let clonedbtn = document.querySelectorAll(".cloned") ;
        clonedbtn.forEach((btn) => {
            btn.addEventListener("click" ,function (e) {
              // create mainComment div
                let mainComment = document.createElement("div");
                mainComment.classList.add("mainComment")
                mainComment.classList.add("me");
                   // create vote div 
            let vote = document.createElement("div");
            vote.className = "vote";
            let plusSpan = document.createElement("span");
            plusSpan.className = "plusRepl";
            let plusImg = document.createElement("img");
            plusImg.src = "./images/icon-plus.svg";
            let minsSpan = document.createElement("span");
            minsSpan.className = "minsRepl"
            let minsImg = document.createElement("img");
            minsImg.src = "./images/icon-minus.svg";
            let numSpan = document.createElement("span");
            numSpan.innerHTML = "0"
            plusSpan.append(plusImg)
            minsSpan.append(minsImg)
            vote.append(plusSpan)
            vote.append(numSpan)
            vote.append(minsSpan);
            // create content div 
            let content = document.createElement("div");
            content.classList.add("content");
             // create header div 
             let header = document.createElement("div");
             header.className = "header";
             let headerImg = document.createElement("img");
             headerImg.src = clonedComment.dataset.img;
             let h2 = document.createElement("h2");
             h2.innerHTML = clonedComment.dataset.name;
             let you = document.createElement("div");
             you.innerHTML = "you";
             you.className = "you";
             let date = document.createElement("span");
             date.className = "date";
             date.innerHTML = "1 minute ago";
             let reply = document.createElement("div");
             reply.classList.add("repl");
                 // reply content 
                 let divOne = document.createElement("div");
                  divOne.className = "deletedRepl"
                 divOne.innerHTML = `<img src="./images/icon-delete.svg""/>delete`
                 let divTwo = document.createElement("div");
                 divTwo.className = "editeRepl"
                 divTwo.innerHTML = `<img src="./images/icon-edit.svg"/>edite`
             reply.append(divOne);
             reply.append(divTwo);
             let p = document.createElement("p");
             p.className = "text";
             let text = clonedTextArea.value.split(" ").slice(1).join(" ")
             p.innerHTML =`<span class="blue">${e.target.parentElement.dataset.tag}</span> ${text}`;
             header.append(headerImg);
             header.append(h2);
             header.append(you);
             header.append(date);
             header.append(reply);
             content.append(header);
             content.append(p);
             mainComment.append(vote)
             mainComment.append(content);
             if(e.target.parentElement.parentElement.classList.contains("replays")) {
                ;
                e.target.parentElement.parentElement.append(mainComment)
             }else if(e.target.parentElement.parentElement.classList.contains("comment")) {
                e.target.parentElement.parentElement.children[1].append(mainComment)
             }
              e.target.parentElement.remove();
                let plusRepl = document.querySelectorAll(".plusRepl")
                let minsRepl = document.querySelectorAll(".minsRepl");
                let editeRepl = document.querySelectorAll(".editeRepl");
                let deletedRepl = document.querySelectorAll(".deletedRepl");
                deletedfun(deletedRepl)
                plusFun(plusRepl)
                minsFun(minsRepl)
                editeFun(editeRepl)
            })
        })
    }
    })
});
}

async function fetchData() {
    let response = await fetch("./data.json");
    let data = await response.json();
    let comments = data.comments;
    // create the dom 
    for (i = 0 ; i < comments.length ; i++) {
        let comment = document.createElement("div");
        comment.classList.add("comment");
        // create mainComment 
        let mainComment = document.createElement("div");
        mainComment.className = "mainComment";
            // main comment content 
            let vote = document.createElement("div");
            vote.classList.add("vote");
            let spanOne = document.createElement("span");
            spanOne.className = "plusjson";
            spanOne.innerHTML = `<img src='./images/icon-plus.svg'/>`
            let spantwo = document.createElement("span");
            spantwo.className = "num";
            spantwo.innerHTML = comments[i].score;
            let spanthree = document.createElement("span");
            spanthree.className = "minsjson";
            spanthree.innerHTML = `<img src='./images/icon-minus.svg'/>`
            vote.append(spanOne)
            vote.append(spantwo)
            vote.append(spanthree)
        // create div content 
        let content = document.createElement("div");
        content.classList.add("content");
            // create header div
            let header = document.createElement("div");
            header.className = "header";
                // header img 
                let img = document.createElement("img");
                img.src = comments[i].user.image.png;
                let h2 = document.createElement("h2");
                h2.innerHTML = comments[i].user.username;
                let date = document.createElement("span");
                date.className = "date";
                date.innerHTML = comments[i].createdAt;
                header.appendChild(img)
                header.appendChild(h2);
                if(comments[i].user.username ==  "juliusomo") {
                    let you = document.createElement("div");
                    you.innerHTML= "you";
                    you.className = "you";
                    header.appendChild(you);
                    header.appendChild(date);
                    mainComment.classList.add("me");
                    let reply = document.createElement("div");
                    reply.classList.add("repl");
                        // reply content 
                        let divOne = document.createElement("div");
                         divOne.className = "deletedjson"
                        divOne.innerHTML = `<img src="./images/icon-delete.svg""/>delete`
                        let divTwo = document.createElement("div");
                        divTwo.className = "editerjson"
                        divTwo.innerHTML = `<img src="./images/icon-edit.svg"/>edite`
                        reply.append(divOne);
                        reply.append(divTwo);
                    }else {
                    header.appendChild(date);
                    let reply = document.createElement("div");
                    reply.innerHTML = `<img src="./images/icon-reply.svg"/>reply`
                    reply.className = "reply";
                    header.appendChild(reply);
                }
                // header.appendChild(reply);
            let p = document.createElement("p");
            let text = document.createTextNode(comments[i].content);
            p.setAttribute("class","text");
            p.append(text);
            content.append(header)
            content.append(p)
            mainComment.append(vote)
            mainComment.append(content);
        let replys = document.createElement("div");
        replys.className = "replays";
        comment.append(mainComment)
        if(comments[i].replies) {
            for (j = 0 ; j < comments[i].replies.length ; j++) {
                                // create mainComment 
                let mainComment = document.createElement("div");
                mainComment.className = "mainComment";
                    // main comment content 
                    let vote = document.createElement("div");
                    vote.classList.add("vote");
                    let spanOne = document.createElement("span");
                    spanOne.className = "plusjson";
                     spanOne.innerHTML = `<img src='./images/icon-plus.svg'/>`
                    let spantwo = document.createElement("span");
                    spantwo.className = "num";
                    spantwo.innerHTML = comments[i].replies[j].score;
                    let spanthree = document.createElement("span");
                    spanthree.className = "minsjson";
                    spanthree.innerHTML = `<img src='./images/icon-minus.svg'/>`
                    vote.append(spanOne)
                    vote.append(spantwo)
                    vote.append(spanthree)
                // create div content 
                let content = document.createElement("div");
                content.classList.add("content");
                    // create header div
                    let header = document.createElement("div");
                    header.className = "header";
                        // header img 
                        let img = document.createElement("img");
                        img.src = comments[i].replies[j].user.image.png;
                        let h2 = document.createElement("h2");
                        h2.innerHTML = comments[i].replies[j].user.username;
       
                        let date = document.createElement("span");
                        date.className = "date";
                        date.innerHTML = comments[i].replies[j].createdAt;
                        header.appendChild(img)
                        header.appendChild(h2)
                        if(comments[i].replies[j].user.username ==  "juliusomo") {
                            let you = document.createElement("div");
                            you.innerHTML= "you";
                            you.className = "you";
                            header.appendChild(you);
                            header.appendChild(date)
                            mainComment.classList.add("me");
                            let reply = document.createElement("div");
                            let divOne = document.createElement("div");
                            reply.className = "repl"
                            divOne.className = "deletedjson"
                            divOne.innerHTML = `<img src="./images/icon-delete.svg""/>delete`
                           let divTwo = document.createElement("div");
                           divTwo.className = "editerjson"
                           divTwo.innerHTML = `<img src="./images/icon-edit.svg"/>edite`
                       reply.append(divOne);
                       reply.append(divTwo);
                       header.appendChild(reply);
                    }else {
                        header.appendChild(date)
                        let reply = document.createElement("div");
                        reply.innerHTML = `<img src="./images/icon-reply.svg"/>reply`
                        reply.className = "reply";
                        header.appendChild(reply);
                    }
                    let p = document.createElement("p");
                    let tag = document.createElement("span");
                    tag.className = "tag";
                    tag.innerHTML = "@"+comments[i].replies[j].replyingTo;
                    let text = document.createTextNode(comments[i].replies[j].content);
                    p.append(tag)
                    p.appendChild(text)
                    p.setAttribute("class","text");
                    content.append(header)
                    content.append(p)
                    mainComment.append(vote)
                    mainComment.append(content);
                    replys.append(mainComment)
            }
        }
        comment.append(replys);
        localStorage.setItem("comments",allComents.innerHTML);
        allComents.append(comment)
    }
    let plusjso = document.querySelectorAll(".plusjson")
    let minsjson = document.querySelectorAll(".minsjson")
    let editerjson = document.querySelectorAll(".editerjson")
    let deletedjson = document.querySelectorAll(".deletedjson")
    plusFun(plusjso)
    minsFun(minsjson)
    editeFun(editerjson)
    deletedfun(deletedjson)
    replying()
}

fetchData() 
function deletedfun(deleted) {
    if(deleted != null){
    deleted.forEach((del) => {
        del.addEventListener("click",function (e) {
        if(e.target.tagName == "DIV") {
            e.target.parentElement.parentElement.parentElement.parentElement.remove()
        }
        })
    })
}
}

function editeFun(edited) {
    if(edited != null) {
edited.forEach((edit) => {
  edit.addEventListener("click",function (e) {
      if(e.target.tagName == "DIV") {
         e.target.parentElement.parentElement.nextElementSibling.contentEditable = true;
         e.target.parentElement.parentElement.nextElementSibling.focus()
          if(e.target.parentElement.parentElement.nextElementSibling.children[0]){
            e.target.parentElement.parentElement.nextElementSibling.children[0].contentEditable = false
          }
          if(  e.target.parentElement.parentElement.nextElementSibling.contentEditable ) {
              e.target.parentElement.parentElement.nextElementSibling.style.border = "1px solid hsl(238, 40%, 52%)";
              e.target.parentElement.parentElement.nextElementSibling.style.borderRadius = "100px";
              e.target.parentElement.parentElement.nextElementSibling.style.borderRadius = "5px";
              e.target.parentElement.parentElement.nextElementSibling.style.outline = "none";
              e.target.parentElement.parentElement.nextElementSibling.style.maxWidth = "100%";
          }
          
          let updateBtn = document.createElement("button");
          updateBtn.innerHTML = "UPDATE";
          updateBtn.className = "up"
          e.target.parentElement.parentElement.parentElement.parentElement.append(updateBtn);
          let up = document.querySelectorAll(".up");
          e.target.style.pointerEvents = "none";
          let parent = e.target;
          up.forEach((e) => {
              e.addEventListener("click" , function (e) {
                  e.target.previousElementSibling.children[1].contentEditable = false;
                  e.target.previousElementSibling.children[1].style.border = "none"
                  parent.style.pointerEvents = "visible"
                  e.target.remove();
              })
          })

      }
   })
})
}
}

function plusFun(plus) {
 
plus.forEach((plu) => {
    plu.addEventListener("click" , function (e) {
        if(e.target.tagName == "SPAN") {
            // let numStop = +e.target.nextElementSibling.innerHTML + 1;
                e.target.nextElementSibling.innerHTML++
                e.target.style.pointerEvents = "none";
                e.target.parentElement.children[2].style.pointerEvents =  "visible"
        }else {
            e.target.parentElement.nextElementSibling.innerHTML++;
            e.target.parentElement.style.pointerEvents = "none";
           e.target.parentElement.parentElement.children[2].style.pointerEvents =  "visible"
        }
    })
})
}

function minsFun(mins) {
  
    mins.forEach((min) => {
    min.addEventListener("click" , function (e) {
        
      if(e.target.tagName == "SPAN") {
          if( +e.target.previousElementSibling.innerHTML > 0 ){
              e.target.previousElementSibling.innerHTML--;
              e.target.style.pointerEvents = "none";
              e.target.parentElement.children[0].style.pointerEvents =  "visible"

          }
        }else {
          if( +e.target.parentElement.previousElementSibling.innerHTML > 0 ){
          e.target.parentElement.previousElementSibling.innerHTML--;
          e.target.parentElement.style.pointerEvents = "none";
          e.target.parentElement.parentElement.children[0].style.pointerEvents =  "visible"

          }
        }
    })
});
}

