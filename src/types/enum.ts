// Enums shared across more than one domain file.
// Enums used by a single model belong next to that model instead.

export type Status = "ACTIVE" | "INACTIVE" | "DELETED";

export type RoleType = "ADMIN" | "GENERAL";

export type UserType = "ADMIN" | "GENERAL";

export type AuthStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "DELETED"
  | "HOLD"
  | "SUSPENDED";

export type PackageStatus = "ACTIVE" | "INACTIVE" | "EXPIRED";

export type TenantType =
  | "ADMIN"
  | "UNIVERSITY"
  | "COLLEGE"
  | "SCHOOL"
  | "OTHER_INSTITUTION";

export type GlobalPermissionType = "ADMIN" | "GENERAL";

export type InstitutionLocation = "URBAN" | "RURAL";

export type CrmStatus =
  | "PENDING"
  | "UNDER_NEGOTIATION"
  | "REQUESTED_TO_ADMIN"
  | "APPROVED"
  | "REJECTED";

export type CrmCollegeStandAloneType =
  | "AFFILIATED_COLLEGE"
  | "CONSTITUENT_UNIVERSITY_COLLEGE"
  | "PG_CENTER_OFF_CAMPUS_CENTER"
  | "AUTONOMOUS_COLLEGE"
  | "RECOGNIZED_CENTER";

export type CrmCollegeManagement =
  | "STATE_GOVERNMENT"
  | "CENTRAL_GOVERNMENT"
  | "PRIVATE_UNAIDED"
  | "PRIVATE_AIDED_GOVERNMENT_AIDED"
  | "UNIVERSITY"
  | "LOCAL_BODY";

export type CrmUniversityType =
  | "CENTRAL_UNIVERSITY"
  | "STATE_PUBLIC_UNIVERSITY"
  | "DEEMED_UNIVERSITY_PRIVATE"
  | "INSTITUTE_UNDER_STATE_LEGISLATURE_ACT"
  | "INSTITUTE_OF_NATIONAL_IMPORTANCE"
  | "DEEMED_UNIVERSITY_GOVERNMENT_AIDED"
  | "DEEMED_UNIVERSITY_GOVERNMENT"
  | "STATE_PRIVATE_UNIVERSITY";

export type CrmOtherInstitutionStandAloneType =
  | "TECHNICAL_POLYTECHNIC"
  | "TEACHER_TRAINING"
  | "PARAMEDICAL"
  | "NURSING"
  | "INSTITUTES_UNDER_MINISTRIES"
  | "PGDM_INSTITUTES"
  | "INSTITUTIONS_UNDER_REHABILITATION_COUNCIL_OF_INDIA"
  | "HOTEL_MANAGEMENT_AND_CATERING"
  | "PHARMACY_INSTITUTIONS";

export type CrmOtherInstitutionManagement =
  | "CENTRAL_GOVERNMENT"
  | "PRIVATE_UNAIDED"
  | "STATE_GOVERNMENT"
  | "PRIVATE_AIDED_GOVERNMENT_AIDED"
  | "LOCAL_BODY"
  | "UNIVERSITY";

export type OtpType = "EMAIL" | "WHATS_APP" | "SMS";
