export default async function formHandler(event) {
    event.preventDefault();
    
    const form = event.target;

    try {
        const response = await submitForm(form);
        handleResponse(response);
    } catch (error) {
        alert(error.message);
        console.log(error);
    }
}

async function submitForm (form) {
    const response = await fetch(`${form.action}`, {
        method: "POST",
        body: new FormData(form),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    return response;
}

function handleResponse(response) {
    if (response.ok) {
        window.location.href = "/today";
    }
}