/**
 *
 * 极简分页 短短几行代码，蕴藏着js最深奥的思想  闭包
 * @param totalPage  总页数
 * @param totalRecords  总记录数
 * @param currentPage   当前页
 * @param pageSize  每页大小
 * @param object  传递参数对象
 * @returns  page  返回页对象
 */

function page(totalPage, totalRecords, currentPage, pageSize, object) {
    let obj = {};
    obj.pageEvent = function (obj2, callback) {
        const mm = obj2.innerHTML;
        switch (mm) {
            case '首页':
                if (currentPage === 1) return;
                currentPage = 1;
                break;
            case'上一页':
                if (currentPage * 1 - 1 === 0) return;
                currentPage = currentPage * 1 - 1;
                break;
            case'下一页':
                if (currentPage * 1 + 1 > totalPage) return;
                currentPage = currentPage * 1 + 1;
                break;
            case'尾页':
                if (currentPage === totalPage) return;
                currentPage = totalPage;
                break;
        }
        callback(currentPage, pageSize, object);
    };
    obj.page = `<div id="Paginator" style="overflow: hidden">
                                    <div style="float: left;height:33.6px;line-height: 33.6px">总<span>${totalPage}</span>页,共<span>${totalRecords}</span>条记录</div>
                                    <ul class="pagination" style="float:right;margin: 0px">
                                        <li>
                                            <a class="btn btn-primary" href="javascript:void(0);" onclick="pageEvent(this)">首页</a>
                                            <a class="btn btn-primary" href="javascript:void(0);" onclick="pageEvent(this)">上一页</a>
                                            <a class="btn btn-primary" href="javascript:void(0)">${currentPage}</a>
                                            <a class="btn btn-primary" href="javascript:void(0);" onclick="pageEvent(this)">下一页</a>
                                            <a class="btn btn-primary" href="javascript:void(0);" onclick="pageEvent(this)">尾页</a>
                                        </li>
                                    </ul>
                                </div>`;
    return obj;
}