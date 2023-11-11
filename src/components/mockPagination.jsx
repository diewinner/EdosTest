import {ArrowLeftSvg} from "../assets/img/svg/ArrowLeft";
import {ArrowRightSvg} from "../assets/img/svg/ArrowRight";
import '../assets/style/customTable.scss'
export const MockPagination = () => {
    const data = [1, 2, 3, 4, '...', 25]
    return (
        <section className={'pagination_container'}>
            <div className={'pagination_item'}>
                <ArrowLeftSvg/>
            </div>
            {data.map(e => <div className={'pagination_item'}>{e}</div>)}
            <div className={'pagination_item'}>
                <ArrowRightSvg/>
            </div>
        </section>
    )
}