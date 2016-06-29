/**
 * @param {character[][]} grid
 * @return {number}
 * 我们遍历矩阵的每一个点，对每个点都尝试进行一次深度优先搜索，
 * 如果搜索到1，就继续向它的四周搜索。
 * 同时我们每找到一个1，就将其标为0，这样就能把整个岛屿变成0。
 * 我们只要记录对矩阵遍历时能进入多少次搜索，就代表有多少个岛屿。
 * 时间 O(NM) 空间 O(max(N,M)) 递归栈空间
 */
var numIslands = function (grid) {
    var col = grid.length;
    if (col === 0) {
        return 0;
    }

    var ret = 0;
    var row = grid[0].length;
    for (var i = 0; i < col; i++) {
        for (var j = 0; j < row; j++) {
            if (grid[i][j] === '1') {
                searchIsland(grid, i, j);
                ret++;
            }
        }
    }

    return ret;
};

function searchIsland(grid, i, j) {
    grid[i][j] = 0;

    if (i > 0 && grid[i - 1][j] === '1') {
        searchIsland(grid, i - 1, j);
    }

    if (j > 0 && grid[i][j - 1] === '1') {
        searchIsland(grid, i, j - 1);
    }

    if (i < grid.length - 1 && grid[i + 1][j] === '1') {
        searchIsland(grid, i + 1, j);
    }

    if (j < grid[0].length - 1 && grid[i][j + 1] === '1') {
        searchIsland(grid, i, j + 1);
    }
}