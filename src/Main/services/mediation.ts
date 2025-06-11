const submitMediation = async ({ mediation }) => {
    try {
        const response = await fetch("/api/mediation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ mediation })
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error submitting mediation:", error);
        throw error;
    }
};
