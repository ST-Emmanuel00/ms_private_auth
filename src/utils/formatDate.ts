export const formatDate = (value: string) => {
    const fullDate = new Date(value)

    return {
        year: fullDate.getFullYear(),
        month: fullDate.getMonth(),
        date: fullDate.getDay(),
    }


}

