const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations')
    if (storedDonations) {
        return JSON.parse(storedDonations)
    }
    return []
}

const saveDonationsToLocalStorage = (id) => {
    const storedDonation = getStoredDonations()
    const exist = storedDonation.find(donation => donation == id)
    if (!exist) {
        storedDonation.push(id)
        localStorage.setItem('donations', JSON.stringify(storedDonation))
    }
}

export { saveDonationsToLocalStorage, getStoredDonations }