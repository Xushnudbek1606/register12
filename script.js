document.addEventListener("DOMContentLoaded", () => {
    let inp = document.querySelector(".inp")
    let add = document.querySelector(".add")
    let list = document.querySelector(".list")

    add.addEventListener("click", () => {
        let li = document.createElement("li")
        span = document.createElement("span")

        span.innerHTML = inp.value
        li.prepend(span)
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "bg-color-azure")

        let del = document.createElement("button")
        del.innerText = "delete"
        del.classList.add("btn", "btn-danger")
        del.addEventListener("click", () => {
            li.remove()
        })
        let edit = document.createElement("button")
        edit.innerText = "edit"
        edit.classList.add("btn", "btn-primary")

        edit.addEventListener("click", () => {
            li.innerHTML = ""
            let new_inp = document.createElement("input")
            new_inp.type = "text"
            let save = document.createElement("button")
            save.innerText = "save"
            save.classList.add("btn", "btn-primary")
            li.append(new_inp, save)
            save.addEventListener("click", (e) => {
                span.innerHTML = li.querySelector("input").value
                li.innerHTML = ""
                li.append(span, edit, del)
            })
        })

        li.append(edit, del)
        list.prepend(li)
        inp.value = ""
    })
})