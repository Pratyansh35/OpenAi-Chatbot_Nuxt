export const useCustomers = () => {
    const customerName = useState("customerName" , () => "");
    const namehasError = computed(() => customerName.value.length < 3);
    const customerInitials = computed(() => {
        const names = customerName.value.split(" ");
        if (names.length < 2) {
            return customerName.value.substring(0, 2).toUpperCase();
        }
        return `${names[0][0]}${names[1][0]}`.toUpperCase();
    });
    return {
        customerName,
        namehasError,
        customerInitials
    }
}