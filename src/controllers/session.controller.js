const getUser = async (req, res) => {
    return res.sendSuccess({msg:'GET Data of User'})
}

const getUserGitHub = async (req, res) => {

    return res.sendSuccess({msg:'GET Data of User of GitHub'})
}

const addUser = async (req, res) => {
    return res.sendSuccess({msg: 'CREATE registro of user'})
}

module.exports = {getUser, getUserGitHub, addUser}
