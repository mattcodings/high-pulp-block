import {createRoot} from "react-dom/client"
import BlockApp from "./components/BlockApp";

const blocks = document.querySelectorAll('.wp-block-mz-staff-finder');
blocks.forEach(block => {
	createRoot(block).render(<BlockApp/>)
})
