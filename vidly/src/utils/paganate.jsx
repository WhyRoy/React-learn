import _ from "lodash";

export function paganate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //   return _(items).slice(startIndex).take(pageSize).value();
  return _(items)
    .slice(startIndex, startIndex + pageSize)
    .value();
  //mosh的方法不对，这个是对的
}
