async function upload() {
    const fileField = document.querySelector('input[type="file"]');
    if (!fileField.files[0]) return errorMessage("No file was chosen.");

    let key = document.getElementById("key").value;
    if (!key) return errorMessage("No key was given.");

    const formData = new FormData();
    formData.append('file', fileField.files[0]);

    let data = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
            'key': key
        }
    });

    let url = await data.text();

    if (isJson(url)) {
        errorMessage(JSON.parse(url).error);
    } else {
        goodMessage(url);
        copyToClipboard(url);
    }
}

function errorMessage(message) {
    let error = document.getElementById("error");
    error.textContent = message.toString();
    error.style.color = "red";
}

function goodMessage(message) {
    let error = document.getElementById("error");
    error.textContent = message.toString();
    error.onclick = copyToClipboard(error.innerText);
    error.style.color = "green";
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}