import './home.css';
import FeaturedInfo from '../featuredInfo/featuredInfo';
import Chart from '../chart/chart';
import {UserData} from '../../data';
import WidgetSm from '../widgetSm/widgetSm';
import WidgetLg from '../widgetLg/widgetLg';
function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart
                title="User Analytics"
                data={UserData}
                dataKey="User"
                grid
            />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;