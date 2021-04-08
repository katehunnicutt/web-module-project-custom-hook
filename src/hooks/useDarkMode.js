import useLocalStorage from './useLocalStorage'

// const useDarkMode = () => {
//     const [value, setValue] = useLocalStorage("dark mode")
//     return[value, setValue]
// }

// export default useDarkMode;

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("dark mode")
    return[value, setValue]
}

export default useDarkMode;