import DefaultHeader from "@/components/Header/DefaultHeader";
import DefaultFooter from "@/components/Header/DefaultFooter";

const MainLayout: React.FC = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <DefaultHeader />
            <div style={{ flex: '1' }}>
            {children}
            </div>
            <DefaultFooter />
        </div>
    )
}

export default MainLayout;