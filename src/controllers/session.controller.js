const getUser = async (req, res) => {
    return res.sendSuccess('GET Data of User')
}

const getUserGitHub = async (req, res) => {
    return res.sendSuccess('GET Data of User of GitHub')
}

const addUser = async (req, res) => {
    return res.sendSuccess('CREATE registro of user')
}

module.exports = {getUser, getUserGitHub, addUser}
