const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzNmNTFkZDIxOWFkM2U3YjNlZmQ3MTMwODJjMTFiZjIzNDk1OTk5MWNiZWUxNDMzMmZiM2YwYWU5Yjk2OWY4MTFhNDMzNDQxYmQwMjg1NWIiLCJpYXQiOjE3MDM4MzcyNDAuODA5NTgxLCJuYmYiOjE3MDM4MzcyNDAuODA5NTg1LCJleHAiOjE3MDM5MjM2NDAuNzk1MDI1LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Bug63gypDCtearu6MZzsI0F-udouKgwOJKfLzk6zptTYWIKVJg0ZcNrKiw6xyCjFrelPC1PC4ftgo3fSlQKC6tl5QjixtYPSopOyYEkuaYeuFxWAQYGvpHzQSlXH1t0u8hgsvXDhDG8kzdnKYhaxsvNCAmjehOarqdtB7ZGaJ7E7OreMyhl1GYmFA2sE7Llg5CVe1_eFIRFKUlhQIySsBI40L6UYbvtCe4c1G9L3mOklmJZ8HraP0EI0H0NvWKFDPWK8iDAxp4Rl0F7np8b8FnpohZdOOKlJ8jgsAKA7MrCVLQWvdqSZtQukFFoRI560mgpW_XodS8Tc1veaHao3onvczl0BD4l8cDwQakkTryIeQ39can68vNDdCyYhJ_IvUZ6dh05-0rtgoNcqNEljRJ-FVYBOk3ZyszJKM2UAwTahhLbCKqRmMYj0PFCyL-3Wu3Rdez8BkWeR0oyV6DG6CWA2CenSARcLIMVIWLt6DOFUgS9mqoxXbqzMq_lpql_5kqjd8itOfM93B2APTqxL_euas9BNr_Q_zsXmxbSNXoOw1-9h7BZxgrEnVCvBVN3ISc006yD4iIDiHRYRvJ016PvKbMcrI_b9jcqmq14FdM7_-iw7sQ-8Y1FCOdbJmIUhej-ADyg7FFhlo0AXS3dc3aH60pgJMrGnCkwsn11oQ6I";
const requestOptions = {
    headers: {
        Authorization: `Bearer ${accessToken}`, // Add the token in the 'Authorization' header
        'Content-Type': 'application/json', // Adjust content type if necessary
    },
};

async function getData(url: string) {
    const res: any = await fetch(url, requestOptions);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const responseData = await res.json();
    const data = responseData?.data;
    return data;
}

export default getData;