import DefaultHeader from "@/components/Header/DefaultHeader";
import DefaultFooter from "@/components/Header/DefaultFooter";

const DefaultLayout: React.FC = ({ children }) => {
    return (
        <>
            <DefaultHeader />
            {children}
            <DefaultFooter />
        </>
    )
}

export default DefaultLayout;