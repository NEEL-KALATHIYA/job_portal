const companyRepository = require("../repository/companyRepository");

exports.getAllCompany = async () => {
  let company = await companyRepository.getAllCompany();
  return company;
};

exports.getAllUnverified = async () => {
  let company = await companyRepository.getAllCompany({ isVerified: false });
  return company;
};

exports.createCompany = async (payload) => {
  let company = await companyRepository.createCompany(payload);
  return company;
};

exports.getCompanyById = async (id) => {
  let company = await companyRepository.getCompanyById(id);
  return company;
};

exports.updateCompany = async (id, payload) => {
  let company = await companyRepository.updateCompany(id, payload);
  return company;
};

exports.deleteCompany = async (id) => {
  let company = await companyRepository.deleteCompany(id);
  return company;
};
