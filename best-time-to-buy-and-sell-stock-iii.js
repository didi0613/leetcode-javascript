/*
 求right的方法其实是求left的对称解法：

 求left时，记录前i天的最低价minPrice与最大获益max，求left[i]：
 考虑要在第i天卖出，那么买进的时间必然是在0到i之间（闭区间），
 这个时候只需要比较prices[i]-minPrice和max就可以求出截止到第i天的最大获益，
 然后根据需要更新minPrice。

 求right时，记录从第i天往后的最高价maxPrice与最大获益max，求right[i]：
 考虑要再第i天买进，那么卖出时间必然是在i到最后一天之间（闭区间），
 这个时候只需要比较maxPrice-prices[i]和max就可以求出从第i天开始的最大获益，
 然后根据需要更新maxPrice。

 对于left和right的构造算法复杂度都是O(n)。
 * */