import DefaultHeader from "@/components/Header/DefaultHeader";
import DefaultSidebar from "@/components/Sidebar/DefaultSidebar";
import DefaultFooter from "@/components/Header/DefaultFooter";

const MainLayout: React.FC = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <DefaultHeader />
            <div style={{ display: 'flex', flex: '1' }}>
                <DefaultSidebar />
                <div>
                {children}
                </div>
            </div>
            <DefaultFooter />
        </div>
    )
}

export default MainLayout;