function edit_work(a) {
    $('.select2-container select2-container--default select2-container--open').css('z-index', '9999');
    $('.select2-container select2-container--default select2-container--open').css('z-index', '9999');
    if ($("#edit_desig_end_date" + a).val() == '') {
        $('#ed_present_div').show();
        $('#ed_present').val(1);
        $('#ed_present').attr('checked', 'checked');
        $('#ed_work_attach_document').attr('disabled', true);
        $('#ed_desig_end_date').attr('disabled', true);
    }
    var b = a, c = $("#edit_designation" + b).val(), d = $("#edit_desig_start_date" + b).val(), f = $("#edit_desig_end_date" + b).val(), g = $("#is_present" + b).val(), h = $("#edit_company_name" + b).val(), i = $("#edit_job_level" + b).val(), j = $("#edit_job_work_history" + b).val();
    var job_country = $("#edit_job_country" + b).val();
    $("#ed_job_country").val(job_country).trigger("change");
    var old_attach = $('#edit_job_work_history' + b).val();
    var url = $("#baseUrl").val();
    $('#w_att_' + b + '').remove();
    if (j != "" && j != null) {
        $('#w_att_' + b + '').remove();
        $('#ed_work_attach_document').next().remove();
        $('#old_attach_img_' + b + '').remove();
        $('#old_attach_exp_' + b + '').remove();
        var img_name = j.split('_');
        $('#ed_work_attach_document').after('<p id="w_att_' + b + '">Previous Attachment: ' + img_name[1] + '</p><br/>');
        $('#w_att_' + b + '').append('<span id="old_attach_exp_' + b + '"></span>');
        $('#old_attach_exp_' + b + '').append('<img id="old_attach_exp_img_' + b + '" src="' + url + 'assets/backend/upload/experience/' + j + '" style="width:30px;"><br/><span style="font-size:10px;">Scanned Document Max:2MB (Only jpg,jpeg,png &amp; pdf allowed)</span>');
    } else {
        $('#ed_work_attach_document').next().remove();
    }
    $("#ed_job_level").val(i).trigger("change");
    var k = $("#job_responsibilities_" + b).val();
    $("#ed_designation").val(c), $("#ed_desig_start_date").val(d), 1 == g && ($("#ed_desig_end_date").attr("disabled", !0), $("#ed_work_attach_document").val(""), $("#ed_work_attach_document").attr("disabled", !0), $("#ed_present").val(g), $("#ed_present").attr("checked", "checked"), $("#ed_present_div").show(), setTimeout(function (a) {
        $("#ed_desig_end_date").val("")
    }, 500)), $("#ed_desig_end_date").val(f), $("#ed_company_name").val(h), $("#old_work_attachment").val(j), tinyMCE.get("ed_job_responsibilities").setContent(k);
    var old_att = old_attach.split('_');
    $('#old_attach').html(old_att[1]);
    var url = $("#baseUrl").val();
    if (old_attach != '') {
        $('#old_attach').append('<img id="old_attach_img" src="' + url + 'assets/backend/upload/experience/' + old_attach + '" height="50" alt="Image">');
    } else {
        $('#old_attach_img').remove();
    }
    var l = 5e3, m = tinyMCE.get("ed_job_responsibilities").getContent({format: "text"});
    return $("#ed_word-count-position_description").html("Characters:" + m.length), m.length >= l ? ($("#ed_word-count-position_description").css("color", "red"), e.preventDefault(), !1) : ($("#ed_word-count-position_description").css("color", "green"), m.length == l || m.length > l ? (e.preventDefault(), !1) : (m.length > l && (this.value = this.value.substring(0, l)), $("#edit_work_id").val(b), void $("#edit-emp-job-information").modal("show")))
}

function delete_work(a) {
    var b = a;
    $("#delete_work").modal("show"), $("#yes_delete_work").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_work/" + b}), $("#loading_modal").modal("hide"), $("#work_history_table #" + b).hide(), $("#delete_work").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function edit_academics(a) {
    var b = a, c = $("#edit_degree_level" + b).val(), d = $("#edit_level_name" + b).val(), e = $("#edit_degree_name" + b).val(), f = $("#edit_degree_institute" + b).val(), academic_institute = $("#edit_academic_institute" + b).val(), g = $("#edit_degree_major" + b).val(), h = $("#edit_degree_start_date" + b).val(), i = $("#edit_degree_end_date" + b).val(), j = $("#edit_degree_country" + b).val(), k = $("#edit_degree_percentage" + b).val(), l = $("#edit_position_holder" + b).val(), m = $("#edit_degree_attachment" + b).val();
    var degree_is_cgpa = $("#edit_degree_is_cgpa" + b).val();
    var degree_total_marks = $("#edit_degree_total_marks" + b).val();
    var degree_obtained_marks = $("#edit_degree_obtained_marks" + b).val();
    var degree_obtained_cgpa = $("#edit_degree_obtained_cgpa" + b).val();
    $('#s_att_' + b + '').remove();
    $('#f_degree_level_edit').prop("disabled", false);
    $("#f_degree_level_edit").append('<option value="' + c + '" selected="selected">' + d + "</option>");
    getDegreebyLevel(c, "ed_degree_name", b);
    var url = $("#baseUrl").val();
    $("#ed_academic_institute").val(academic_institute).trigger('change');
    $("#ed_degree_institute").val(f);
    $("#ed_degree_major").val(g);
    $("#ed_degree_start_date").val(h), $("#ed_degree_end_date").val(i);
    $("#ed_degree_country").val(j).trigger("change");
    $("#ed_marks_per").val(k);
    $("#ed_degree_position").val(l).trigger("change");
    $("#edit_degree_id").val(b);
    $("#old_degree_attachment").val(m);
    $("#h_degree_end_date").val(i);
    if (m != "" && m != null) {
        $('#s_att_' + b + '').remove();
        $('#ed_attach_document').next().remove();
        $('#old_attach_img_' + b + '').remove();
        $('#old_attach_edu_' + b + '').remove();
        var img_name = m.split('_');
        $('#ed_attach_document').after('<p id="s_att_' + b + '">Previous Attachment: ' + img_name[1] + '</p><br/>');
        $('#s_att_' + b + '').append('<span id="old_attach_edu_' + b + '"></span>');
        $('#old_attach_edu_' + b + '').append('<img id="old_attach_edu_img_' + b + '" src="' + url + 'assets/backend/upload/education/' + m + '" height="50"><br/><span style="font-size:10px;">Scanned Document Max:2MB (Only jpg,jpeg,png &amp; pdf allowed)</span>');
    } else {
        $('#ed_attach_document').next().remove();
    }
    setTimeout(function (e) {
        $("#ed_degree_name").val($('#hed_degree_level').val() + '_' + $("#edit_degree_name" + b).val()).trigger('change');
    }, 1000);
    $("#ed_degree_is_cgpa").val(degree_is_cgpa).trigger('change');
    $("#ed_degree_total_marks").val(degree_total_marks);
    $("#ed_degree_obtained_marks").val(degree_obtained_marks);
    $("#ed_degree_obtained_cgpa").val(degree_obtained_cgpa);
    $("#hed_degree_level").val(c), "D13" != c && "D1" != c && "D2" != c || $(".ed_common_disable").prop("disabled", !0), $("#edit-degree-information").modal("show");
}
function delete_academics(a) {
    var b = a;
    $("#delete_education").modal("show"), $("#yes_delete_education").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_education/" + b}), $("#loading_modal").modal("hide"), $("#academics_table #edurec_" + b).hide(), $("#delete_education").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function edit_skill(a) {
    var ID = a;
    var b = $("#edit_skill_id" + ID).val(), d = ($("#edit_skill_name" + ID).val().toString(), $("#edit_skill_level" + ID).val().toString()), e = $("#edit_skill_summary" + ID).val().toString();
    $("#ed_skill_id").val(b).trigger("change"), $("#ed_skill_level").val(d).trigger("change"), $("#ed_skill_summary").val(e), $("#eskill_id").val(ID), $("#old_skill_id").val(b), $("#edit-specialities").modal("show")
}
function delete_skill(a) {
    var b = a;
    $("#delete_skill").modal("show"), $("#yes_delete_skill").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_skills/" + b}), $("#loading_modal").modal("hide"), $("#skills_table #" + b).hide(), $("#delete_skill").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function edit_training(a) {
    var b = a, d = $("#edit_course_name" + b).val(), e = $("#edit_organizer_body" + b).val(), f = $("#edit_start_date" + b).val(), g = $("#edit_end_date" + b).val();
    $("#ed_course_name").val(d), $("#ed_organizer_body").val(e), $("#ed_training_start_date_1").val(f), $("#ed_training_end_date").val(g), $("#training_id").val(b), $("#old_training_name").val(d), $("#old_training_organization").val(e), $("#ed_training_end_date").attr("readonly", !1), $("#edit-training").modal("show")
}
function delete_training(a) {
    var b = a;
    $("#delete_training").modal("show"), $("#yes_delete_training").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_training/" + b}), $("#loading_modal").modal("hide"), $("#training_table #" + b).hide(), $("#delete_training").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function edit_cert(a) {
    var b = a, c = $("#edit_certificate_id" + b).val(), d = $("#edit_training_institute" + b).val(), e = $("#edit_valid_till" + b).val();
    f = $("#edit_certificate_id" + b).val();
    $("#ed_certificate_name").val(c).trigger("change"), $("#ed_training_institute").val(d), $("#ed_valid_till").val(e), $("#cert_id").val(b), $("#old_certificate_name").val(c), $("#old_institute_name").val(d), $("#edit-certification").modal("show")
}
function del_cert(a) {
    var b = a;
    $("#delete_certification").modal("show"), $("#yes_delete_certification").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_certifications/" + b}), $("#loading_modal").modal("hide"), $("#certification_table #" + b).hide(), $("#delete_certification").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function edit_research(a) {
    var b = a, c = $("#edit_research_name" + b).val(), d = $("#edit_publication_venue" + b).val(), e = $("#edit_publication_link" + b).val();
    $("#ed_research_name").val(c), $("#old_research_name").val(c), $("#ed_publication_venue").val(d), $("#ed_publication_link").val(e), $("#ed_res_id").val(b), $("#edit-research").modal("show")
}
function delete_research(a) {
    var b = a;
    $("#delete_research").modal("show"), $("#yes_delete_research").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_research/" + b}), $("#loading_modal").modal("hide"), $("#research_table #" + b).hide(), $("#delete_research").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function del_membership(a) {
    var b = a;
    $("#delete_membership").modal("show"), $("#yes_delete_membership").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_membership/" + b}), $("#loading_modal").modal("hide"), $("#research_table #" + b).hide(), $("#delete_membership").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function edit_reference(a) {
    ID = a, reference_id = ID, edit_ref_name = $("#edit_ref_name" + ID).val(), edit_ref_job_title = $("#edit_ref_job_title" + ID).val(), edit_company_name = $("#edit_company_name" + ID).val(), edit_phone = $("#edit_phone" + ID).val(), edit_email = $("#edit_email" + ID).val(), edit_relation = $("#edit_relation" + ID).val(), $("#ed_ref_name").val(edit_ref_name), $("#ed_ref_job_title").val(edit_ref_job_title), $("#ed_ref_company_name").val(edit_company_name), $("#ed_ref_phone").val(edit_phone), $("#ed_ref_email").val(edit_email), $("#ed_ref_relation").val(edit_relation), $("#ed_ref_relation").trigger("change"), $("#ed_r_id").val(ID), $("#edit-references").modal("show")
}
function del_reference(a) {
    var b = a;
    $("#delete_reference").modal("show"), $("#yes_delete_reference").click(function () {
        var a = $("#url").attr("value");
        $("#loading_modal").modal("show"), setTimeout(function () {
            $.ajax({url: a + "new_profile_builder/delete_references/" + b}), $("#loading_modal").modal("hide"), $("#example7 #" + b).hide(), $("#delete_reference").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Record has been deleted!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
        }, 1e3)
    })
}
function check_married() {
    var a = $("#gender_id").val(), b = $("#marital_status_id").val();
    "Female" == a && "Married" == b ? $("#husband_name").prop("disabled", !1) : ($("#husband_name").val(""), $("#information_profile").bootstrapValidator("resetField", "husband_name"), $("#husband_name").prop("disabled", !0))
}
function exitModel(a) {
    $("#" + a).hide()
}
function selectGradeDiv(a, b) {
    var b = b.split("_");
    1 == a ? $(".divisionDiv").show() : $(".divisionDiv").hide(), 2 == a ? $(".gradeDiv").show() : $(".gradeDiv").hide(), 1 != a && 2 != a && ($(".divisionDiv").hide(), $(".gradeDiv").hide())
}
function getDegreeLevel(a) {
    "literate" == a || "primary" == a || "middle" == a ? $(".common_disable").prop("disabled", !0) : $(".common_disable").prop("disabled", !1)
}
function getDegreeLevelEdit(a) {
    "literate" == a || "primary" == a || "middle" == a ? $(".ed_common_disable").prop("disabled", !0) : $(".ed_common_disable").prop("disabled", !1)
}
function degreeLevel___(a, b) {
    var c = "";
    "add_degree_information_form" == b ? ($("#position_degree").val(null).trigger("change"), $("#total_year_education").val(null).trigger("change"), $("#academic_institute").val(null).trigger("change"), $("#degree_is_cgpa").val(null).trigger("change"), $("#" + b).bootstrapValidator("resetField", "degree_name"), $("#" + b).bootstrapValidator("resetField", "degree_start_date"), "D1" == a || "D2" == a || "D3" == a || "D13" == a ? ($('#degree_institute').val(''), $('#academic_institute').val(''), $('#degree_major').val(''), $('#degree_start_date_1').val(''), $('#degree_end_date').val(''), $('#degree_country').val(null).trigger("change"), $('#marks_per').val(''), $('#degree_position').val(null).trigger("change"), $('#attach_document').val(''), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_institute'), $('#add_degree_information_form').bootstrapValidator('resetField', 'academic_institute'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_major'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_start_date'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_end_date'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_country'), $('#add_degree_information_form').bootstrapValidator('resetField', 'marks_per'), $('#add_degree_information_form').bootstrapValidator('resetField', 'attach_document'), $('.common_disable').prop("disabled", true), $("#degree_country").prop("disabled", true), $("#degree_position").prop("disabled", true), $("#academic_institute").prop("disabled", true), $("#degree_is_cgpa").prop("disabled", true), $("#degree_start_date_1").addClass("disabled-color"), $("#degree_end_date").addClass("disabled-color"), "D13" == a && ($("#position_degree").prop("disabled", !0), c = '<option value="0">0 Years</option><option value="1">01 Years</option><option value="2">02 Years</option><option value="3">03 Years</option><option value="4">04 Years</option>', $("#total_year_education").append(c)), "D1" == a && ($("#position_degree").prop("disabled", !0), $("#total_year_education").append('<option value="5">05 Years</option>'), $("#total_year_education").val("5").trigger("change")), "D2" == a && ($("#position_degree").prop("disabled", !0), $("#total_year_education").append('<option value="8">08 Years</option>'), $("#total_year_education").val("8").trigger("change")), "D3" == a && ($("#total_year_education").append('<option value="9">09 Years</option>'), $("#total_year_education").val("9").trigger("change"), $("#position_degree").prop("disabled", !1), getDegreebyLevel(a, "position_degree"))) : ($("#position_degree").prop("disabled", !1), $(".common_disable").prop("disabled", !1), $("#degree_start_date_1").removeClass("disabled-color"), $("#degree_end_date").removeClass("disabled-color"), $("#academic_institute").prop("disabled", false), $("#degree_is_cgpa").prop("disabled", false), "D4" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="10">10 Years</option>'), $("#total_year_education").val("10").trigger("change"), getDegreebyLevel(a, "position_degree")), "D5" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="12">12 Years</option>'), $("#total_year_education").val("12").trigger("change"), getDegreebyLevel(a, "position_degree")), "D6" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="14">14 Years</option>'), $("#total_year_education").val("14").trigger("change"), getDegreebyLevel(a, "position_degree")), "D7" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="15">15 Years</option>'), $("#total_year_education").val("15").trigger("change"), getDegreebyLevel(a, "position_degree")), "D8" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="16">16 Years</option>'), $("#total_year_education").val("16").trigger("change"), getDegreebyLevel(a, "position_degree")), "D9" != a && "D10" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="18">18 Years</option>'), $("#total_year_education").val("18").trigger("change"), getDegreebyLevel(a, "position_degree")), "D11" != a && "D12" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="19">19 Years</option><option value="20">20 Years</option><option value="21">21 Years</option>'), getDegreebyLevel(a, "position_degree")))) : "edit_degree_information_form" == b && ($("#ed_degree_name").val(null).trigger("change"), $("#total_year_education").val(null).trigger("change"), $("#" + b).bootstrapValidator("resetField", "ed_degree_name"), $("#" + b).bootstrapValidator("resetField", "ed_academic_institute"), $("#" + b).bootstrapValidator("resetField", "ed_degree_start_date"), "D1" == a || "D2" == a || "D3" == a || "D13" == a ? ($(".ed_common_disable").prop("disabled", !0), $("#ed_academic_institute").val(null).trigger('change'), $("#ed_degree_major").val(''), $("#ed_degree_start_date").val(''), $("#ed_degree_end_date").val(''), $("#h_degree_end_date").val(''), $("#ed_degree_country").val(null).trigger('change'), $("#ed_marks_per").val(''), $("#ed_degree_position").val(null).trigger('change'), $("#ed_degree_obtained_cgpa").val(''), $("#ed_degree_total_marks").val(''), $("#ed_degree_obtained_marks").val(''), $("#ed_degree_obtained_cgpa").val(''), $("#ed_degree_is_cgpa").val(null).trigger('change'), $("#ed_degree_start_date").addClass("disabled-color"), $("#ed_degree_end_date").addClass("disabled-color"), "D13" == a && ($("#ed_degree_name").prop("disabled", !0), c = '<option value="0">0 Years</option><option value="1">01 Years</option><option value="2">02 Years</option><option value="3">03 Years</option><option value="4">04 Years</option>', $("#total_year_education").append(c)), "D1" == a && ($("#ed_degree_name").prop("disabled", !0), $("#total_year_education").append('<option value="5">05 Years</option>'), $("#total_year_education").val("5").trigger("change")), "D2" == a && ($("#ed_degree_name").prop("disabled", !0), $("#total_year_education").append('<option value="8">08 Years</option>'), $("#total_year_education").val("8").trigger("change")), "D3" == a && ($("#total_year_education").append('<option value="9">09 Years</option>'), $("#total_year_education").val("9").trigger("change"), $("#ed_degree_name").prop("disabled", !1), getDegreebyLevel(a, "ed_degree_name"))) : ($("#position_degree").prop("disabled", !1), $(".ed_common_disable").prop("disabled", !1), $("#degree_start_date_1").removeClass("disabled-color"), $("#degree_end_date").removeClass("disabled-color"), "D4" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="10">10 Years</option>'), $("#total_year_education").val("10").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D5" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="12">12 Years</option>'), $("#total_year_education").val("12").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D6" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="14">14 Years</option>'), $("#total_year_education").val("14").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D7" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="15">15 Years</option>'), $("#total_year_education").val("15").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D8" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="16">16 Years</option>'), $("#total_year_education").val("16").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D9" != a && "D10" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="18">18 Years</option>'), $("#total_year_education").val("18").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D11" != a && "D12" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="19">19 Years</option><option value="20">20 Years</option><option value="21">21 Years</option>'), getDegreebyLevel(a, "ed_degree_name"))))
}

function degreeLevel(a, b) {
    var c = "";
    "add_degree_information_form" == b ? ($("#position_degree").val(null).trigger("change"), $("#total_year_education").val(null).trigger("change"), $("#academic_institute").val(null).trigger("change"), $("#degree_is_cgpa").val(null).trigger("change"), $("#" + b).bootstrapValidator("resetField", "degree_name"), $("#" + b).bootstrapValidator("resetField", "degree_start_date"), "D1" == a || "D2" == a || "D3" == a || "D13" == a ? ($('#degree_institute').val(''), $('#academic_institute').val(''), $('#degree_major').val(''), $('#degree_start_date_1').val(''), $('#degree_end_date').val(''), $('#degree_country').val(null).trigger("change"), $('#marks_per').val(''), $('#degree_position').val(null).trigger("change"), $('#attach_document').val(''), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_institute'), $('#add_degree_information_form').bootstrapValidator('resetField', 'academic_institute'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_major'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_start_date'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_end_date'), $('#add_degree_information_form').bootstrapValidator('resetField', 'degree_country'), $('#add_degree_information_form').bootstrapValidator('resetField', 'marks_per'), $('#add_degree_information_form').bootstrapValidator('resetField', 'attach_document'), $('.common_disable').prop("disabled", true), $("#degree_country").prop("disabled", true), $("#degree_position").prop("disabled", true), $("#academic_institute").prop("disabled", true), $("#degree_is_cgpa").prop("disabled", true), $("#degree_start_date_1").addClass("disabled-color"), $("#degree_end_date").addClass("disabled-color"), "D13" == a && ($("#position_degree").prop("disabled", !0), c = '<option value="0">0 Years</option><option value="1">01 Years</option><option value="2">02 Years</option><option value="3">03 Years</option><option value="4">04 Years</option>', $("#total_year_education").append(c)), "D1" == a && ($("#position_degree").prop("disabled", !0), $("#total_year_education").append('<option value="5">05 Years</option>'), $("#total_year_education").val("5").trigger("change")), "D2" == a && ($("#position_degree").prop("disabled", !0), $("#total_year_education").append('<option value="8">08 Years</option>'), $("#total_year_education").val("8").trigger("change")), "D3" == a && ($("#total_year_education").append('<option value="9">09 Years</option>'), $("#total_year_education").val("9").trigger("change"), $("#position_degree").prop("disabled", !1), getDegreebyLevel(a, "position_degree"))) : ($("#position_degree").prop("disabled", !1), $(".common_disable").prop("disabled", !1), $("#degree_start_date_1").removeClass("disabled-color"), $("#degree_end_date").removeClass("disabled-color"), $("#academic_institute").prop("disabled", false), $("#degree_is_cgpa").prop("disabled", false), "D4" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="10">10 Years</option>'), $("#total_year_education").val("10").trigger("change"), getDegreebyLevel(a, "position_degree")), "D5" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="12">12 Years</option>'), $("#total_year_education").val("12").trigger("change"), getDegreebyLevel(a, "position_degree")), "D6" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="14">14 Years</option>'), $("#total_year_education").val("14").trigger("change"), getDegreebyLevel(a, "position_degree")), "D7" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="15">15 Years</option>'), $("#total_year_education").val("15").trigger("change"), getDegreebyLevel(a, "position_degree")), "D8" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="16">16 Years</option>'), $("#total_year_education").val("16").trigger("change"), getDegreebyLevel(a, "position_degree")), "D9" != a && "D10" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="18">18 Years</option>'), $("#total_year_education").val("18").trigger("change"), getDegreebyLevel(a, "position_degree")), "D11" != a && "D12" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="19">19 Years</option><option value="20">20 Years</option><option value="21">21 Years</option>'), $('#marks_per').prop('disabled',true),$('#degree_position').prop('disabled',true),$('#degree_is_cgpa').prop('disabled',true),getDegreebyLevel(a, "position_degree")))) : "edit_degree_information_form" == b && ($("#ed_degree_name").val(null).trigger("change"), $("#total_year_education").val(null).trigger("change"), $("#" + b).bootstrapValidator("resetField", "ed_degree_name"), $("#" + b).bootstrapValidator("resetField", "ed_academic_institute"), $("#" + b).bootstrapValidator("resetField", "ed_degree_start_date"), "D1" == a || "D2" == a || "D3" == a || "D13" == a ? ($(".ed_common_disable").prop("disabled", !0), $("#ed_academic_institute").val(null).trigger('change'), $("#ed_degree_major").val(''), $("#ed_degree_start_date").val(''), $("#ed_degree_end_date").val(''), $("#h_degree_end_date").val(''), $("#ed_degree_country").val(null).trigger('change'), $("#ed_marks_per").val(''), $("#ed_degree_position").val(null).trigger('change'), $("#ed_degree_obtained_cgpa").val(''), $("#ed_degree_total_marks").val(''), $("#ed_degree_obtained_marks").val(''), $("#ed_degree_obtained_cgpa").val(''), $("#ed_degree_is_cgpa").val(null).trigger('change'), $("#ed_degree_start_date").addClass("disabled-color"), $("#ed_degree_end_date").addClass("disabled-color"), "D13" == a && ($("#ed_degree_name").prop("disabled", !0), c = '<option value="0">0 Years</option><option value="1">01 Years</option><option value="2">02 Years</option><option value="3">03 Years</option><option value="4">04 Years</option>', $("#total_year_education").append(c)), "D1" == a && ($("#ed_degree_name").prop("disabled", !0), $("#total_year_education").append('<option value="5">05 Years</option>'), $("#total_year_education").val("5").trigger("change")), "D2" == a && ($("#ed_degree_name").prop("disabled", !0), $("#total_year_education").append('<option value="8">08 Years</option>'), $("#total_year_education").val("8").trigger("change")), "D3" == a && ($("#total_year_education").append('<option value="9">09 Years</option>'), $("#total_year_education").val("9").trigger("change"), $("#ed_degree_name").prop("disabled", !1), getDegreebyLevel(a, "ed_degree_name"))) : ($("#position_degree").prop("disabled", !1), $(".ed_common_disable").prop("disabled", !1), $("#degree_start_date_1").removeClass("disabled-color"), $("#degree_end_date").removeClass("disabled-color"), "D4" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="10">10 Years</option>'), $("#total_year_education").val("10").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D5" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="12">12 Years</option>'), $("#total_year_education").val("12").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D6" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="14">14 Years</option>'), $("#total_year_education").val("14").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D7" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="15">15 Years</option>'), $("#total_year_education").val("15").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D8" == a && ($("#total_year_education").html(""), $("#total_year_education").append('<option value="16">16 Years</option>'), $("#total_year_education").val("16").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D9" != a && "D10" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="18">18 Years</option>'), $("#total_year_education").val("18").trigger("change"), getDegreebyLevel(a, "ed_degree_name")), "D11" != a && "D12" != a || ($("#total_year_education").html(""), $("#total_year_education").append('<option value="19">19 Years</option><option value="20">20 Years</option><option value="21">21 Years</option>'),$('#ed_marks_per').prop('disabled',true),$('#ed_degree_position').prop('disabled',true),$('#ed_degree_is_cgpa').prop('disabled',true),getDegreebyLevel(a, "ed_degree_name"))))
}

function getDegreebyLevel(a, b, id) {
    var idd = (typeof id === "undefined") ? null : id;
    var selected_deg_name = $('#edit_degree_name' + idd).val();
    var c = $("#baseUrl").val(), d = c + "new_profile_builder/getDegreebyLevel";
    $.ajax({url: d, data: {degree_level: a}, type: "POST", success: function (a) {
            var a = $.parseJSON(a);
            if ("success" == a.status) {
                $("#" + b).html("");
                var c = '<option value="">Nothing Selected</option>';
                $("#" + b).html(""), $(a.degrees).each(function (a, b) {
                    var selected = (b.degree_level_code + "_" + selected_deg_name == b.degree_level_code + "_" + b.id) ? 'selected="selected"' : '';
                    c += '<option value="' + b.degree_level_code + "_" + b.id + '" ' + selected + '>' + b.name + "</option>";
                });
                $("#" + b).append(c).trigger('change');
            } else
                $("#" + b).html(""), $("#" + b).append('<option value="">Nothing Selected</option>')
        }, error: function (a, b, c) {
        }});
}
function showCvUpload() {
    setTimeout(function () {
        $("#pi").hasClass("active") ? $(".uploal-cv-btn").show() : $("#pi").hasClass("complete") && $(".uploal-cv-btn").hide()
    }, 100)
}
function handleKeyDown(a) {
    var b = 0, c = 0, d = 0, e = null == a ? event : a;
    d = e.shiftKey, 
    c = e.altKey, 
    b = e.ctrlKey, 
    self.status = "shiftKey=" + d + ", altKey=" + c + ", ctrlKey=" + b;
    if((d && (c || b)) && 73 == e.keyCode){
     e.preventDefault();   
    }
      
}
function loadSelect2inModal(selectClass,modalId){
    $('.'+selectClass).select2({
    dropdownParent: $('#'+modalId)
});
}
function loadSelect2inModalById(selectId,modalId){
    $('#'+selectId).select2({
    dropdownParent: $('#'+modalId)
});
}
function adjustModalScroll(a, b, c, d, e) {
    "shown.bs.modal" == b ? $("#" + a).on(b, function () {
        loadSelect2inModal('ss',a);
        $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_end_date");
        null == c && "" == c || ($(".add_degree_select").select2("val", ""), document.getElementById(c).reset(), $("#" + c).bootstrapValidator("resetForm", !0), $("#" + c).bootstrapValidator("resetField", "degree_start_date"), $("#" + c).bootstrapValidator("resetField", "degree_end_date"), $(".add_degree_select").select2("val", ""), $(".add_ref_select").select2("val", ""), $(".ed_ref_select").select2("val", ""), (d.length > 0 || null != d) && $(d).each(function (a, b) {
            $("#" + c).bootstrapValidator("resetField", b.trim())
        })), $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }) : "hidden.bs.modal" == b && (null == c && "" == c || ($("#" + c).bootstrapValidator("resetForm", !0), $(".ed_common_disable").prop("disabled", !1), $(".common_disable").prop("disabled", !1), null == e && "" == e || $("#" + e).html(""), $(".add_degree_select").select2("val", ""), $(".add_ref_select").select2("val", ""), $(".add_skill_select").select2("val", ""), $(".ed_skill_select").select2("val", ""), $(".ed_job_inf_select").select2("val", ""), $(".ed_degree_select").select2("val", ""), $(".job_inf_select").select2("val", ""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")))
}
function hideElementDom(a) {
    var b, c = new Image, d = document.querySelector("#" + a), e = d.innerHTML;
    c.__defineGetter__("id", function () {
        b = ""
    }), setInterval(function () {
        b = e, d.innerHTML = b
    }, 1e3)
}
function preview(a) {
    tinymce.init({selector: ".job_responsibilities", height: 250, browser_spellcheck: !0, max_word: 2, theme: "modern", statusbar: !1, plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen autoresize", "insertdatetime table contextmenu paste code"], content_css: [$("#base_url").val() + "assets/recruitment/tinymce/codepen.min.css"]}), 
    tinymce.get(a).execCommand("mcePreview")
}

$(window).resize(function () {
    if ($(window).width() < 789) {
        $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_end_date");
    } else {
        $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_end_date");
    }
});
$(document).ready(function () {
    $("#cnic_token").css({display: "none"}), $("#cnic_expire").css({display: "none"}), $(".notification").delay(3200).fadeOut(300), tinymce.init({selector: "#job_responsibilities", height: 250, browser_spellcheck: !0, max_word: 2, theme: "modern", statusbar: !1, plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen autoresize", "insertdatetime table contextmenu paste code"], content_css: [$("#base_url").val() + "assets/recruitment/tinymce/codepen.min.css"], setup: function (a) {
            a.on("keyup", function (a) {
                var b = 5e3, c = tinyMCE.activeEditor.getContent({format: "text"});
                $("#word-count-position_description").html("Characters:" + c.length), a.which < 32 || (c.length >= b ? $("#word-count-position_description").css("color", "red") : $("#word-count-position_description").css("color", "green"), c.length == b || c.length > b ? a.preventDefault() : c.length > b && (this.value = this.value.substring(0, b)), $("#add_employee_job_information").bootstrapValidator("revalidateField", "job_responsibilities"))
            })
        }}), tinymce.init({selector: "#ed_job_responsibilities", invalid_elements: 'iframe,script', height: 250, browser_spellcheck: !0, max_word: 2, theme: "modern", statusbar: !1, plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen autoresize", "insertdatetime table contextmenu paste code"], content_css: [$("#base_url").val() + "assets/recruitment/tinymce/codepen.min.css"], setup: function (a) {
            a.on("keyup", function (a) {
                var b = 5e3, c = tinyMCE.activeEditor.getContent({format: "text"});
                if ($("#ed_word-count-position_description").html("Characters:" + c.length), a.which < 32) {
                    if (c.length >= b ? ($("#ed_word-count-position_description").css("color", "red"), a.preventDefault()) : $("#ed_word-count-position_description").css("color", "green"), c.length >= b)
                        return $("#ed_word-count-position_description").css("color", "red"), void a.preventDefault()
                } else
                    c.length >= b ? $("#ed_word-count-position_description").css("color", "red") : $("#ed_word-count-position_description").css("color", "green"), c.length == b || c.length > b ? a.preventDefault() : c.length > b && (this.value = this.value.substring(0, b)), $("#edit_employee_job_information").bootstrapValidator("revalidateField", "ed_job_responsibilities")
            })
        }});
    var a = $("#expiry_option").val();
    1 == a && ($("#cnic_token").css({display: "block"}), $("#txt_cnic_token").prop("disabled", !1), $("#expected_date").css({display: "block"}), $("#txt_expected_date").prop("disabled", !1), $("#cnic_expire").css({display: "none"}), $("#txt_cnic_expire").prop("disabled", !0), $("#txt_cnic_expire").val("")), 0 == a && ($("#cnic_expire").css({display: "block"}), $("#txt_cnic_expire").prop("disabled", !1), $("#cnic_token").css({display: "none"}), $("#txt_cnic_token").prop("disabled", !0), $("#txt_cnic_token").val(""), $("#expected_date").css({display: "none"}), $("#txt_expected_date").prop("disabled", !0), $("#txt_expected_date").val("")), "" == a && ($("#cnic_token").css({display: "none"}), $("#txt_cnic_token").prop("disabled", !0), $("#txt_cnic_token").val(""), $("#expected_date").css({display: "none"}), $("#txt_expected_date").prop("disabled", !0), $("#txt_expected_date").val(""), $("#cnic_expire").css({display: "none"}), $("#txt_cnic_expire").prop("disabled", !0), $("#txt_cnic_expire").val("")), 
    $(".ss").select2(), 
    $("#ed_degree_name").select2(), 
    $("#f_degree_level_edit").select2(), 
    $("#position_degree").select2(), 
    $("#degree_country").select2(), 
    $("#degree_position").select2(), 
    $(".add_emp_select").select2(), 
    $(".job_inf_select").select2(), 
    $(".ed_job_inf_select").select2(), 
    $(".add_degree_select").select2(), 
    $(".ed_degree_select").select2(), 
    $(".add_skill_select").select2(), 
    $(".ed_skill_select").select2(), 
    $(".add_ref_select").select2(), 
    $(".ed_ref_select").select2(), 
    $(".target_job_select").select2(), 
    $("#expiry_option").on("change", function (a) {
        a.preventDefault();
        var b = $("#expiry_option").val();
        1 == b && ($("#cnic_token").css({display: "block"}), $("#txt_cnic_token").prop("disabled", !1), $("#expected_date").css({display: "block"}), $("#txt_expected_date").prop("disabled", !1), $("#cnic_expire").css({display: "none"}), $("#txt_cnic_expire").prop("disabled", !0), $("#txt_cnic_expire").val("")), 0 == b && ($("#cnic_expire").css({display: "block"}), $("#txt_cnic_expire").prop("disabled", !1), $("#cnic_token").css({display: "none"}), $("#txt_cnic_token").prop("disabled", !0), $("#txt_cnic_token").val(""), $("#expected_date").css({display: "none"}), $("#txt_expected_date").prop("disabled", !0), $("#txt_expected_date").val("")), "" == b && ($("#cnic_token").css({display: "none"}), $("#txt_cnic_token").prop("disabled", !0), $("#txt_cnic_token").val(""), $("#expected_date").css({display: "none"}), $("#txt_expected_date").prop("disabled", !0), $("#txt_expected_date").val(""), $("#cnic_expire").css({display: "none"}), $("#txt_cnic_expire").prop("disabled", !0), $("#txt_cnic_expire").val(""))
    });
    var b = $(".child"), c = setInterval(function () {
        var a = b.eq(Math.floor(Math.random() * b.length)).addClass("flip");
        setTimeout(function () {
            a.removeClass("flip")
        }, 3e3), 1 == b.length && clearInterval(c), b = b.not(a)
    }, Math.floor(4500 * Math.random() + 500));
    $("#cnic_id").mask("99999-9999999-9"), $("#mobile_num").mask("+99-9999-9999?99999"), $("#land_line").mask("+99-99999999?99999"), $("#ref_phone").mask("+99-99999999?99999"), $("#ed_ref_phone").mask("+99-99999999?99999"), $("#txt_cnic_token").mask("999999999999"), 
    $("#information_profile").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            $(".pre-loader2").show();
            var d = $("#url").val(), 
            e = $("#candidate_id").val(), 
            f = $("#mobile_num").val().replace(/[_)(-]/g, ""), 
            g = $("#land_line").val().replace(/[_)(-]/g, ""), 
            h = $("#cnic_id").val().replace(/[_)(-]/g, ""), 
            i = $("#txt_cnic_token").val().replace(/[_)(-]/g, ""), 
            j = $("#domicile_id option:selected").text().trim();
            var form = b[0];
            form = new FormData(form);
            //form.append('cand_noc',$('#cand_noc').val());
            form.append('candidate_cnic',e);
            form.append('day_phone',f);
            form.append('evening_phone',g);
            form.append('cnic',h);
            form.append('cnic_token',i);
            form.append('domicile_name',j);
            return $.ajax({url: d + "new_profile_builder/information",type: "POST",data: form, cache: !1, contentType: !1, processData: !1, mimeType: "multipart/form-data", success: function (a) {
                    setTimeout(function () {
                        $(".pre-loader2").hide();
                         //alert('here iam...');
                        var b = $.parseJSON(a);
                        //var b = a;
                        if ("validation" == b.status){
                            $("#information_profile_erros").html(""), $(b.errors).each(function (k, v) {
                                $("#information_profile_erros").append('<div class="alert-box error"><span>error: </span>' + v + "</div>")
                            });
                        }
                        else if("success" == b.status){
                            $(".alert-box").html("");
                            $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successully!</div>").fadeIn(300).delay(3200).fadeOut(300);
                        }
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, 
        fields: {f_name: {validators: {notEmpty: {message: "Please enter first name"}, stringLength: {min: 3, max: 50, message: 'The first name must be greater than 2 and less than 50 characters'}, regexp: {regexp: /^[a-z,. \s]+$/i, message: "Please enter alphabets only"}}}, l_name: {validators: {notEmpty: {message: "Please enter last name"}, stringLength: {min: 3, max: 50, message: 'The last name must be greater than 2 and less than 50 characters'}, regexp: {regexp: /^[a-z,. \s]+$/i, message: "Please enter alphabets only"}}}, date_of_birth: {validators: {notEmpty: {message: "Please enter date of birth"}}}, father_name: {validators: {notEmpty: {message: "Please enter father name"}, stringLength: {min: 3, max: 100, message: 'The father name must be greater than 3 and less than 100 characters'}, regexp: {regexp: /^[a-z .\s]+$/i, message: "Please enter alphabets only"}}}, husband_name: {validators: {notEmpty: {message: "Please enter husband name"}, stringLength: {min: 3, max: 100, message: 'The husband name must be greater than 3 and less than 100 characters'}, regexp: {regexp: /^[a-z\s]+$/i, message: "Please enter alphabets only"}}}, gender: {validators: {notEmpty: {message: "Please enter gender"}, stringLength: {min: 4, max: 10, message: 'The gender field must be greater than 4 and less than 10 characters'}}}, age: {validators: {notEmpty: {message: "Please enter age"}, between: {min: 18, max: 100, message: "Age must be between 18 - 100"}}}, marital_status: {validators: {notEmpty: {message: "Please marital status"}, stringLength: {min: 4, max: 15, message: 'The marital status must be greater than 4 and less than 15 characters'}}}, expiry_option: {validators: {notEmpty: {message: "Please select cnic expiry option"}}}, cnic_expiry_date: {validators: {notEmpty: {message: "Please enter cnic expiry date"}}}, cnic_token: {validators: {notEmpty: {message: "Please enter cnic token"}}}, expected_date: {validators: {notEmpty: {message: "Please enter cnic expected date"}}}, residential_address: {validators: {notEmpty: {message: "Please enter address"}, stringLength: {min: 5, max: 500, message: 'The residential address must be greater than 3 and less than 100 characters'}, regexp: {regexp: /^[a-zA-Z0-9\/#&\d\-_.(),\s]+$/i, message: "Please enter valid address"}}}, city: {validators: {notEmpty: {message: "Please enter city"}, regexp: {regexp: /^[a-z\s]+$/i, message: "Please enter alphabets only"}}}, txt_city: {validators: {notEmpty: {message: "Please enter city"}, regexp: {regexp: /^[a-zA-Z\s]+$/i, message: "Please enter alphabets only"}}}, domicile: {validators: {notEmpty: {message: "Please enter domicile"}}}, country_of_birth: {validators: {notEmpty: {message: "Please select country"}}}, nationality: {validators: {notEmpty: {message: "Please select nationality"}, regexp: {regexp: /^[a-z\s]+$/i, message: "Please enter alphabets only"}}}, religion: {validators: {notEmpty: {message: "Please enter religion"}, stringLength: {min: 3, max: 100, message: 'The religion must be greater than 3 and less than 100 characters'}, regexp: {regexp: /^[a-z\s]+$/i, message: "Please enter alphabets only"}}}, objective: {validators: {stringLength: {min: 10, max: 2000, message: 'The objective must be greater than 10 and less than 2000 characters'}, regexp: {regexp: /^[a-zA-Z0-9\d\-_.()!+=#&,\s]+$/i, message: "Please enter valid objective"}}}}, is_gov_off: {validators: {between: {min: 0, max: 1, message: "Only select YES or NO"},regexp: {regexp: /^[0-9\s]+$/i, message: "Please enter numerics only"}} },is_disabled: {validators: {between: {min: 0, max: 1, message: "Only select YES or NO"},regexp: {regexp: /^[0-9\s]+$/i, message: "Please enter numerics only"}} },cand_noc: {validators: {file: {extension: "jpeg,jpg,png,pdf", type: "image/jpeg,image/png,application/pdf", maxSize: 2097152, message: "The selected file is not valid only (jpeg,jpg,png,pdf) formats & max 2MB size allowed"}}}}), 
    $("#target_job_forms").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#candidate_id").val(), f = $("#candidate_cnic").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/target_job", data: $("#target_job_forms").serialize() + "&candidate_id=" + e + "&candidate_cnic=" + f, type: "POST", success: function (a) {
                    var b = $.parseJSON(a);
                    if ("validation" == b.status)
                        return $("#target_job_validation_erros").html(""), $(b.errors).each(function (a, b) {
                            $("#target_job_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                        }), $("#loading_modal").modal("hide"), setTimeout(function (a) {
                            $("#target_job_validation_erros").html("")
                        }, 3e3), !1;
                    "success" == b.status && setTimeout(function () {
                        $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {target_job_title: {validators: {notEmpty: {message: "Please enter target job"}, regexp: {regexp: /^[a-zA-Z0-9&-_,\s]+$/i, message: "Please enter alphabets only"}}}, carrier_level: {validators: {notEmpty: {message: "Please enter career level"}}}, target_monthly_salary: {validators: {notEmpty: {message: "Please enter target monthly salary"}}}}}), 
    $("#add_employee_job_information").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            $(".pre-loader2").show();
            tinyMCE.triggerSave();
            var d = $("#url").val(), 
            e = $("#designation").val(), 
            f = $("#desig_start_date_1").val(), 
            g = $("#desig_end_date").val(), 
            h = $("#company_name").val(), 
            i = $("#job_level").find("option:selected").text(), 
            j = tinyMCE.get("job_responsibilities").getContent({format: "html"}), 
            plain_text_responsiblities = tinyMCE.get("job_responsibilities").getContent({format: "text"});
            var m = $("#job_level").find("option:selected").val();
            var job_country = $("#job_country").find("option:selected").val();
            var get_work_attach = $('#add_work_attach_document').val();
            var sp = get_work_attach.split('\\');
            var work_attach = sp[sp.length - 1];
            var k = d + "new_profile_builder/employee_job_information", l = b[0], l = new FormData(l);l.append("job_responsibilities", j);
            return  $.ajax({url: k, type: "POST", data: l, cache: !1, contentType: !1, processData: !1, mimeType: "multipart/form-data", success: function (a) {
                    //setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_job_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_job_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-emp-job-information").css("overflow-x", "auto"), $("#add-emp-job-information").css("overflow-y", "auto"), $("#add-emp-job-information").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $("#loading_modal").modal("hide"), $("#add_employee_job_information").bootstrapValidator("resetForm", !0), tinymce.get("job_responsibilities").setContent(""), $("#job_level").val(null).trigger("change");
                        var c = b.data_id, d = "";
                        var responsiblities_column = '<textarea style="display:none;" class="job_responsibilities" id="job_responsibilities_' + c + '">' + j + '</textarea><a style="color:#000;" href="javascript:void(0);" onClick=preview("job_responsibilities_' + c + '")>' + plain_text_responsiblities.substring(0, 50) + "...</a>";
                        var to_column = ($('#present').is(':checked')) ? 'Present' : g;
                        d = (b.status = "success") ? ($("#add-emp-job-information").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300), $("#work_history_table").append("<tr id=" + c + ' class=""> <td class="" style="">' + e + '</td><td class="" style="">' + f + '</td><td class="" style="">' + to_column + '</td><td class="" style="">' + h + '</td><td class="" style="">' + i + '</td><td class="" style="">' + responsiblities_column + '</td><td class="" ><input type="hidden" value="' + e + '" id=edit_designation' + c + '><input type="hidden" value="' + f + '" id=edit_desig_start_date' + c + '><input type="hidden" value="' + g + '" id=edit_desig_end_date' + c + '><input type="hidden" value="' + h + '" id=edit_company_name' + c + '><input type="hidden" value="' + m + '" id=edit_job_level' + c + '><input type="hidden" value="' + job_country + '" id=edit_job_country' + c + '><input type="hidden" value="' + b.upload_image + '" id=edit_job_work_history' + c + '><input type="hidden" value="' + work_attach + '" id=work_attachment' + c + '> <a href="javascript:void(0)" class="education_delete btn btn-success btn-sm" onclick="edit_work(' + c + ');" data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="btn btn-primary btn-sm" onclick="delete_work(' + c + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td> </tr>'), $("#loading_modal").modal("hide"), $("#job_level").val("")) : ($("#add-emp-job-information").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    //}, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {designation: {validators: {notEmpty: {message: "Please enter designation"}, stringLength: {min: 3, max: 100, message: "The designation must be beteween 3 to 100 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 ,.&#_)(\s]+$/i, message: "Please enter alphanumerics or (,.&#_()) only"}}}, desig_start_date: {validators: {notEmpty: {message: "Please enter start date"}}}, desig_end_date: {validators: {notEmpty: {message: "Please enter end date"}}}, company_name: {validators: {notEmpty: {message: "Please enter company name"}, stringLength: {min: 3, max: 100, message: "The company name must be beteween 3 to 100 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 ,.&#_)(\s]+$/i, message: "Please enter alphanumerics or (,.&#_()) only"}}}, job_level: {validators: {notEmpty: {message: "Please enter job level"}}}, job_country: {validators: {notEmpty: {message: "Please Select Country"}}}, job_responsibilities: {validators: {callback: {message: "The job responsibilities must be between 5 and 5000 characters long", callback: function (a, b, c) {
                            var d = tinyMCE.get("job_responsibilities").getContent({format: "text"});
                            if (d.match(/^[-a-zA-Z0-9 !@$=+-.&#_)(\s]+$/i)) {
                                return true;
                            } else if (d.length <= 5e3 && d.length >= 5) {
                                return d.length <= 5e3 && d.length >= 5;
                            } else {
                                return false;
                            }
                        }}}}, add_work_attach_document: {validators: {notEmpty: {message: "Attachement is required"}, file: {extension: "jpeg,jpg,png,pdf", type: "image/jpeg,image/png,application/pdf", maxSize: 2097152, message: "The selected file is not valid only (jpeg,jpg,png,pdf) formats & max 2MB size allowed"}}}}}), $("#edit_employee_job_information").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            if ($('#ed_present').val() == 0) {
                $('#ed_desig_end_date').prop('disabled', false);
                $('#ed_desig_end_date').removeAttr('readonly');
            }
            var d = $("#edit_work_id").val(), e = $("#url").val(), f = $("#ed_designation").val(), g = $("#ed_desig_start_date").val(), h = $("#ed_desig_end_date").val(), i = $("#ed_company_name").val(), j = $("#ed_job_level").find("option:selected").text(), job_level_id = $("#ed_job_level").val(), k = tinyMCE.get("ed_job_responsibilities").getContent({format: "html"});
            var textcontent = tinyMCE.get("ed_job_responsibilities").getContent({format: "text"});
            var job_country = $("#ed_job_country").find("option:selected").val();
            $(".modal-open .modal").css("z-index", "");
            $(".pre-loader2").show();
            var l = e + "new_profile_builder/edit_employee_job_information", m = b[0], m = new FormData(m);
            if ($('#ed_present').val() == 0) {
                $('#ed_desig_end_date').prop('disabled', false);
                $('#ed_desig_end_date').removeAttr('readonly');
            }
            return m.append("ed_job_responsibilities", k), tinyMCE.triggerSave(), $.ajax({url: l, type: "POST", data: m, cache: !1, contentType: !1, processData: !1, mimeType: "multipart/form-data", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_job_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_job_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-emp-job-information").css("overflow-x", "auto"), $("#edit-emp-job-information").css("overflow-y", "visible"), $("#edit-emp-job-information").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        var c = b.data_id, checklen = "";
                        checklen = k.length > 50 ? '<textarea style="display:none;" class="job_responsibilities" id="job_responsibilities_' + c + '">' + k + '</textarea><a style="color:#000;" href="javascript:void(0);" onClick=preview("job_responsibilities_' + c + '")>' + $(k).text().substring(0, 50) + "...</a>" : k, (b.status = "success") ? ($("#edit-emp-job-information").modal("hide"), $("#loading_modal").modal("hide"), $("#work_history_table #" + d).html(""), $("#work_history_table #" + d).append('<td class="" style="">' + f + '</td><td class="" style="">' + g + '</td><td class="" style="">' + h + '</td><td class="" style="">' + i + '</td><td class="" style="">' + j + '</td><td class="" style=""> <textarea style="display:none;" class="job_responsibilities" id="job_responsibilities_' + c + '">' + k + '</textarea> <a style="color:#000;" href="javascript:void(0);" onclick="preview(&quot;job_responsibilities_' + c + '&quot;)">' + checklen + '</a></td><td><input type="hidden" value="' + textcontent + '" id="edit_job_responsibilities_' + c + '"><input type="hidden" value="' + f + '" id=edit_designation' + c + '> <input type="hidden" value="' + g + '" id=edit_desig_start_date' + c + '> <input type="hidden" value="' + h + '" id=edit_desig_end_date' + c + '> <input type="hidden" value="' + i + '" id=edit_company_name' + c + '> <input type="hidden" value="' + job_level_id + '" id=edit_job_level' + c + '><input type="hidden" value="' + job_country + '" id=edit_job_country' + c + '><input type="hidden" value="' + b.upload_image + '" id=edit_job_work_history' + c + '><a href="javascript:void(0)" onclick="edit_work(' + c + ')" class="education_delete btn btn-success btn-sm" data-tooltip="tooltip" title="Edit"> <i class="fa fa-edit" aria-hidden="true"> </i></a> <a href="javascript:void(0)" onclick="delete_work(' + c + ')" class="btn btn-primary btn-sm" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#edit-emp-job-information").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_designation: {validators: {notEmpty: {message: "Please enter designation"}, stringLength: {min: 3, max: 100, message: "The designation must be beteween 3 to 100 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 ,.&#_)(\s]+$/i, message: "Please enter alphanumerics or (,.&#_()) only"}}}, ed_desig_start_date: {validators: {notEmpty: {message: "Please enter start date"}}}, ed_desig_end_date: {validators: {notEmpty: {message: "Please enter end date"}}}, ed_company_name: {validators: {notEmpty: {message: "Please enter company name"}, stringLength: {min: 3, max: 100, message: "The company name must be beteween 3 to 100 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 ,.&#_)(\s]+$/i, message: "Please enter alphanumerics or (,.&#_()) only"}}}, ed_job_level: {validators: {notEmpty: {message: "Please enter job level"}}}, job_country: {validators: {notEmpty: {message: "Please Select Country"}}}, ed_job_responsibilities: {validators: {callback: {message: "The job responsibilities must be between 5 and 5000 characters long", callback: function (a, b, c) {
                            var d = tinyMCE.get("ed_job_responsibilities").getContent({format: "text"});
                            if (d.match(/^[-a-zA-Z0-9 !@$=+-.&#_)(\s]+$/i)) {
                                return true;
                            } else if (d.length <= 5e3 && d.length >= 5) {
                                return d.length <= 5e3 && d.length >= 5;
                            } else {
                                return false;
                            }
                        }}}}, ed_work_attach_document: {validators: {file: {extension: "jpeg,jpg,png,pdf", type: "image/jpeg,image/png,application/pdf", maxSize: 2097152, message: "The selected file is not valid only (jpeg,jpg,png,pdf)formats & max 2MB size allowed"}}}}}), $('#academic_institute').change(function () {
        var academic_institute_value = parseInt($(this).val());
        if (academic_institute_value === 3194) {
            $('#other_academic_institute_row').show();
            $('#degree_institute').prop('disabled', false);
            $('#degree_institute').val('');
        } else {
            $('#other_academic_institute_row').hide();
            $('#degree_institute').prop('disabled', true);
        }
    });
    $('#ed_academic_institute').change(function () {
        var academic_institute_value = parseInt($(this).val());
        if (academic_institute_value === 3194) {
            $('#ed_other_academic_institute_row').show();
            $('#ed_degree_institute').val('');
            $('#ed_degree_institute').prop('disabled', false);
        } else {
            $('#ed_other_academic_institute_row').hide();
            $('#ed_degree_institute').prop('disabled', true);
        }
    });
    $('#degree_is_cgpa').change(function () {
        var degree_is_cgpa = parseInt($(this).val());
        if (degree_is_cgpa === 1) {
            $('.degree_marks_section').hide();
            $('.degree_marks_section').prop('disabled', true);
            $('#degree_total_marks').val('');
            $('#degree_obtained_marks').val('');
            $('.degree_cgpa_section').show();
            $('.degree_cgpa_section').prop('disabled', false);
        } else if (degree_is_cgpa === 2) {
            $('.degree_cgpa_section').hide();
            $('.degree_cgpa_section').prop('disabled', true);
            $('#degree_obtained_cgpa').val('');
            $('.degree_marks_section').show();
            $('.degree_marks_section').prop('disabled', false);
        } else {
            $('.degree_cgpa_section').hide();
            $('.degree_cgpa_section').prop('disabled', true);
            $('.degree_marks_section').hide();
            $('.degree_marks_section').prop('disabled', true);
            $('#degree_total_marks').val('');
            $('#degree_obtained_marks').val('');
            $('#degree_obtained_cgpa').val('');
        }
    });
    $('#ed_degree_is_cgpa').change(function () {
        var degree_is_cgpa = parseInt($(this).val());
        if (degree_is_cgpa === 1) {
            $('.ed_degree_marks_section').hide();
            $('#ed_degree_total_marks').val('');
            $('#ed_degree_obtained_marks').val('');
            $('#ed_degree_total_marks').prop('disabled', true);
            $('#ed_degree_obtained_marks').prop('disabled', true);
            $('.ed_degree_cgpa_section').show();
            $('#ed_degree_obtained_cgpa').prop('disabled', false);
        } else if (degree_is_cgpa === 2) {
            $('.ed_degree_cgpa_section').hide();
            $('#ed_degree_obtained_cgpa').val('');
            $('#ed_degree_obtained_cgpa').prop('disabled', true);
            $('.ed_degree_marks_section').show();
            $('#ed_degree_total_marks').prop('disabled', false);
            $('#ed_degree_obtained_marks').prop('disabled', false);
        } else {
            $('.ed_degree_cgpa_section').hide();
            $('.ed_degree_marks_section').hide();
            $('#ed_degree_total_marks').val('');
            $('#ed_degree_obtained_marks').val('');
            $('#ed_degree_obtained_cgpa').val('');
            $('#ed_degree_obtained_cgpa').prop('disabled', true);
            $('#ed_degree_total_marks').prop('disabled', true);
            $('#ed_degree_obtained_marks').prop('disabled', true);
        }
    });
    $("#add_degree_information_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            $(".modal-open .modal").css("z-index", "");
            $(".pre-loader2").show();
            var d = $("#url").val();
            var g = $("#f_degree_level").find("option:selected").text();
            var temp = '';
            var temp1 = '';
            if ($("#position_degree").find("option:selected").text() == "Select Degree") {
                temp = '';
            } else {
                temp = $("#position_degree").find("option:selected").text();
            }
            if ($("#degree_country").find("option:selected").text() == "Select Country") {
                temp1 = '';
            } else {
                temp1 = $("#degree_country").find("option:selected").text();
            }
            if ("Literate" == g || "Primary" == g || "Middle" == g) {
                var academic_institute = "";
                var academic_institute_text = "";
                var h = "";
                var i = $('#f_degree_level').find("option:selected").text();
                var j = "";
                var k = "";
                var l = "";
                var m = "";
                var n = "";
                var o = "";
                var p = "";
                var q = "";
                var r = "";
                var deg_level_name = $("#f_degree_level").find("option:selected").text();
                var deg_level = $("#f_degree_level").find("option:selected").val();
            } else {
                var degree_is_cgpa = parseInt($("#degree_is_cgpa").val());
                var degree_total_marks = $("#degree_total_marks").val();
                var degree_obtained_marks = $("#degree_obtained_marks").val();
                var degree_obtained_cgpa = $("#degree_obtained_cgpa").val();
                var academic_institute = $("#academic_institute").val();
                var academic_institute_text = $("#academic_institute option:selected").text();
                var h = (academic_institute === 3194) ? $("#degree_institute").val() : academic_institute_text;
                var i = $("#f_degree_level").find("option:selected").text();
                var deg_level_name = $("#f_degree_level").find("option:selected").text();
                var deg_level = $("#f_degree_level").find("option:selected").val();
                var j = $("#degree_start_date_1").val();
                var k = $("#degree_end_date").val();
                var l = $("#position_degree").find("option:selected").text();
                var parse_degree_id = $("#position_degree").find("option:selected").val().split('_');
                var m = parse_degree_id[1];
                var n = $("#degree_major").val();
                var o = $("#degree_country").find("option:selected").text();
                var p = $("#degree_country").find("option:selected").val();
                var q = $("#marks_per").val();
                var r = $("#degree_position").find("option:selected").val();
                "" == r && (r = "No")
            }
            var s = d + "new_profile_builder/degree_information";
            var t = b[0];
            var t = new FormData(t);
            return $.ajax({url: s, type: "POST", data: t, cache: !1, contentType: !1, processData: !1, mimeType: "multipart/form-data", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_degree_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_degree_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-degree-information").css("overflow-x", "auto"), $("#add-degree-information").css("overflow-y", "auto"), $("#add-degree-information").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), $(".modal-open .modal").css("z-index", "9924 !important"), !1;
                        $("#add-degree-information").modal("hide");
                        var c = b.data_id;
                        (b.status = "success") ? ($("#add_degree_information_form").bootstrapValidator("resetForm", !0), $("#academics_table").append('<tr id="' + c + '"> <td class="" style="">' + h + '</td><td class="" style="">' + i + '</td><td class="" style="">' + temp + '</td><td class="" style="">' + n + '</td><td class="" style="">' + j + '</td><td class="" style="">' + k + '</td><td class="" style="">' + temp1 + '</td><td class="" style="">' + q + '</td><td class="" style="">' + r + '</td><td> <input type="hidden" value="' + h + '" id=edit_degree_institute' + c + '><input type="hidden" value="' + academic_institute + '" id=edit_academic_institute' + c + '><input type="hidden" value="' + deg_level + '" id=edit_degree_level' + c + '><input type="hidden" value="' + deg_level_name + '" id=edit_level_name' + c + '><input type="hidden" value="' + l + '" id=edit_degree_id' + c + '><input type="hidden" value="' + m + '" id=edit_degree_name' + c + '><input type="hidden" value="' + n + '" id=edit_degree_major' + c + '><input type="hidden" value="' + j + '" id=edit_degree_start_date' + c + '><input type="hidden" value="' + k + '" id=edit_degree_end_date' + c + '><input type="hidden" value="' + p + '" id=edit_degree_country' + c + '><input type="hidden" value="' + q + '" id=edit_degree_percentage' + c + '><input type="hidden" value="' + $("#degree_position").find("option:selected").val() + '" id=edit_position_holder' + c + '><input type="hidden" value="' + b.upload_image + '" id=edit_degree_attachment' + c + '><input type="hidden" value="' + degree_is_cgpa + '" id=edit_degree_is_cgpa' + c + '><input type="hidden" value="' + degree_total_marks + '" id=edit_degree_total_marks' + c + '><input type="hidden" value="' + degree_obtained_marks + '" id=edit_degree_obtained_marks' + c + '><input type="hidden" value="' + degree_obtained_cgpa + '" id=edit_degree_obtained_cgpa' + c + '><a href="javascript:void(0)" onclick="edit_academics(' + c + ')" class="education_delete btn btn-success btn-sm"  data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"></i> </a> <a href="javascript:void(0)" onclick="delete_academics(' + c + ')" class="btn btn-primary btn-sm" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>'), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-degree-information").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a, b, c) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }});
        }, fields: {degree_institute: {validators: {regexp: {regexp: /^[a-zA-z _&)(-\s]+$/i, message: "Please enter alphabets only"}}}, academic_institute: {validators: {notEmpty: {message: "Please Select Institute"}, numeric: {message: 'Select From the given List', }}}, degree_level: {validators: {notEmpty: {message: "Degree Level is required"}}}, degree_name: {validators: {notEmpty: {message: "Please enter degree name"}}}, degree_major: {validators: {notEmpty: {message: "Please enter degree major"}, regexp: {regexp: /^[a-zA-z ,._&)(-\s]+$/i, message: "Please enter alphabets only"}}}, degree_start_date: {validators: {notEmpty: {message: "Please enter start date"}}}, degree_end_date: {validators: {notEmpty: {message: "Please enter end date"}}}, degree_country: {validators: {notEmpty: {message: "Please enter country"}}}, marks_per: {validators: {notEmpty: {message: "Percentage is required"}, between: {min: 33, max: 100, message: "Percentage must be between 33 to 100"}, regexp: {regexp: /^\d+(\.\d{1,2})?$/, message: "Decimal value upto two point"}}}, attach_document: {validators: {notEmpty: {message: "Attachement is required"}, file: {extension: "jpeg,jpg,png,pdf", type: "image/jpg,image/jpeg,image/png,application/pdf", maxSize: 2097152, message: "The selected file is not valid only (jpeg,jpg,png,pdf) formats & max 2MB size allowed"}}}, degree_is_cgpa: {validators: {numeric: {message: 'Select From the given List'}}}, degree_obtained_cgpa: {validators: {between: {min: 1, max: 5, message: "CGPA must be between 1 to 5"}, regexp: {regexp: /^[0-9.]+$/, message: "Decimal value upto two point"}}}, degree_total_marks: {validators: {digits: {message: 'Only Digits Allowed'}, between: {min: 1, max: 10000, message: "Total Marks be between 1 to 10000"}, callback: {message: 'Total marks should be greater than or equal to obtained marks', callback: function (value, validator) {
                            var ob_marks = $('#degree_obtained_marks').val();
                            var t_marks = $("#degree_total_marks").val();
                            if (ob_marks === '' && t_marks === '') {
                                return true;
                            }
                            if (ob_marks === '' || (parseInt(t_marks) > parseInt(ob_marks))) {
                                return true;
                            }
                            return false;
                        }}}}, degree_obtained_marks: {validators: {digits: {message: 'Only Digits Allowed'}, between: {min: 1, max: 10000, message: "Obtained marks be between 1 to 10000"}, callback: {message: 'Obtained marks should be less than or equal to total marks', callback: function (value, validator) {
                            var ob_marks = $('#degree_obtained_marks').val();
                            var t_marks = $("#degree_total_marks").val();
                            if (t_marks === '') {
                                return false;
                            }
                            if (parseInt(ob_marks) <= parseInt(t_marks)) {
                                return true;
                            } else {
                                return false;
                            }
                        }}}}}}), $("#edit_degree_information_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            $(".pre-loader2").show();
            var d = $("#url").val(), e = $("#edit_degree_id").val();
            $("#ed_degree_end_date").removeAttr("readonly"), $("#ed_degree_end_date").prop("disabled", false), $("#edit_degree_information_form").bootstrapValidator("revalidateField", "ed_degree_end_date");
            var f = $("#f_degree_level_edit").find("option:selected").val();
            if ("D13" == f || "D1" == f || "D2" == f) {
                var g = "", h = $("#f_degree_level_edit").find("option:selected").text(), i = "", j = "", k = "", l = $("#f_degree_level_edit").find("option:selected").val(), m = "", n = "", o = "", p = "", q = "";
            } else {
                var degree_is_cgpa = parseInt($("#ed_degree_is_cgpa").val());
                var degree_total_marks = $("#ed_degree_total_marks").val();
                var degree_obtained_marks = $("#ed_degree_obtained_marks").val();
                var degree_obtained_cgpa = $("#ed_degree_obtained_cgpa").val();
                var academic_institute = parseInt($("#ed_academic_institute").val());
                var academic_institute_text = $("#ed_academic_institute option:selected").text();
                var g = (academic_institute === 3194) ? $("#ed_degree_institute").val() : academic_institute_text;
                var h = $("#f_degree_level_edit").find("option:selected").text(), k = $("#ed_degree_name").find("option:selected").text(), i = $("#ed_degree_start_date").val(), j = $("#ed_degree_end_date").val(), r = $("#ed_degree_name").find("option:selected").val(), e = r.split("_"), l = $("#f_degree_level_edit").find("option:selected").val(), m = $("#ed_degree_major").val(), n = $("#ed_degree_country").find("option:selected").text(), o = $("#ed_degree_country").find("option:selected").val(), p = $("#ed_marks_per").val(), q = $("#ed_degree_position").find("option:selected").val();
                "" == q && (q = "No")
            }
            var s = d + "new_profile_builder/edit_degree_information", t = b[0], t = new FormData(t);
            return $.ajax({url: s, type: "POST", data: t, cache: !1, contentType: !1, processData: !1, mimeType: "multipart/form-data", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_degree_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_degree_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-degree-information").css("overflow-x", "auto"), $("#edit-degree-information").css("overflow-y", "auto"), $("#edit-degree-information").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $(".pre-loader2").hide();
                        var c = b.data_id;
                        (b.status = "success") ? ($("#edit-degree-information").modal("hide"), $("#edurec_" + c).html(""), $("#edurec_" + c).append("<td>" + g + "</td><td>" + h + "</td><td>" + k + "</td><td>" + m + "</td><td>" + i + "</td><td>" + j + "</td><td>" + n + "</td><td>" + p + "</td><td>" + q + '</td><td><input type="hidden" value="' + g + '" id=edit_degree_institute' + c + '><input type="hidden" value="' + academic_institute + '" id=edit_academic_institute' + c + '><input type="hidden" value="' + l + '" id=edit_degree_level' + c + '><input type="hidden" value="' + h + '" id=edit_level_name' + c + '><input type="hidden" value="' + e[1] + '" id="edit_degree_name' + c + '"><input type="hidden" value="' + m + '" id=edit_degree_major' + c + '><input type="hidden" value="' + i + '" id=edit_degree_start_date' + c + '><input type="hidden" value="' + j + '" id=edit_degree_end_date' + c + '><input type="hidden" value="' + o + '" id=edit_degree_country' + c + '><input type="hidden" value="' + p + '" id=edit_degree_percentage' + c + '><input type="hidden" value="' + $("#ed_degree_position").find("option:selected").val() + '" id=edit_position_holder' + c + '><input type="hidden" value="' + b.upload_image + '" id=edit_degree_attachment' + c + '><input type="hidden" value="' + degree_is_cgpa + '" id=edit_degree_is_cgpa' + c + '><input type="hidden" value="' + degree_total_marks + '" id=edit_degree_total_marks' + c + '><input type="hidden" value="' + degree_obtained_marks + '" id=edit_degree_obtained_marks' + c + '><input type="hidden" value="' + degree_obtained_cgpa + '" id=edit_degree_obtained_cgpa' + c + '><a href="javascript:void(0)" onclick="edit_academics(' + c + ')" class="education_delete btn btn-success btn-sm"  data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"></i> </a> <a href="javascript:void(0)" onclick="delete_academics(' + c + ')" class="btn btn-primary btn-sm" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#edit-degree-information").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_degree_institute: {validators: {regexp: {regexp: /^[a-zA-z _&)(-\s]+$/i, message: "Please enter alphabets only"}}}, ed_academic_institute: {validators: {notEmpty: {message: "Please Select Institute"}, numeric: {message: 'Select From the given List', }}}, ed_degree_level: {validators: {notEmpty: {message: "Degree Level is required"}}}, ed_degree_name: {validators: {notEmpty: {message: "Please enter degree name"}}}, ed_degree_major: {validators: {notEmpty: {message: "Please enter degree major"}, regexp: {regexp: /^[a-z ,._&)(-\s]+$/i, message: "Please enter alphabets only"}}}, ed_degree_start_date: {validators: {notEmpty: {message: "Please enter start date"}}}, ed_degree_end_date: {validators: {notEmpty: {message: "Please enter end date"}}}, ed_degree_country: {validators: {notEmpty: {message: "Please enter country"}}}, ed_marks_per: {validators: {notEmpty: {message: "Percentage is required"}, between: {min: 33, max: 100, message: "Percentage must be between 33 to 100"}, regexp: {regexp: /^\d+(\.\d{1,2})?$/, message: "Decimal value upto two point"}}}, ed_attach_document: {validators: {file: {extension: "jpeg,jpg,png,pdf", type: "image/jpeg,image/png,application/pdf", maxSize: 2097152, message: "The selected file is not valid only (jpeg,jpg,png,pdf) formats & max 2MB size allowed"}}}, ed_degree_obtained_cgpa: {validators: {between: {min: 1, max: 5, message: "CGPA must be between 1 to 5"}, regexp: {regexp: /^\d+(\.\d{1,2})?$/, message: "Decimal value upto two point"}}}, ed_degree_total_marks: {validators: {digits: {message: 'Only Digits Allowed'},between: {min: 1, max: 10000, message: "CGPA must be between 1 to 10000"},callback: {message: 'Total marks should be greater than or equal to obtained marks', callback: function (value, validator) {
                            var ob_marks = $('#ed_degree_obtained_marks').val();
                            var t_marks = $("#ed_degree_total_marks").val();
                            if (ob_marks === '' && t_marks === '') {
                                return true;
                            }
                            if (ob_marks === '' || (parseInt(t_marks) > parseInt(ob_marks))) {
                                return true;
                            }
                            return false;
                        }}}}, ed_degree_obtained_marks: {validators: {digits: {message: 'Only Digits Allowed'}, callback: {message: 'Obtained marks should be less than or equal to total marks', callback: function (value, validator) {
                            var ob_marks = $('#ed_degree_obtained_marks').val();
                            var t_marks = $("#ed_degree_total_marks").val();
                            if (ob_marks === '' && t_marks === '') {
                                return true;
                            }
                            if (t_marks === '') {
                                return false;
                            }
                            if (parseInt(ob_marks) <= parseInt(t_marks)) {
                                return true;
                            } else {
                                return false;
                            }
                        }}}}}}), $("#Specialities_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#candidate_id").val(), f = $("#candidate_cnic").val(), g = $("#skill_id").find("option:selected").val(), h = $("#skill_id").find("option:selected").text(), i = $("#skill_level").find("option:selected").val(), j = $("#skill_summary").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/specialities", data: $("#Specialities_form").serialize() + "&candidate_cnic=" + f + "&candidate_id=" + e, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_skill_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_skill_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-specialities").css("overflow-x", "auto"), $("#add-specialities").css("overflow-y", "auto"), $("#add-specialities").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        var c = b.data_id;
                        (b.status = "success") ? ($("#Specialities_form").bootstrapValidator("resetForm", !0), $("#skill_id").val("").trigger("change"), $("#skill_level").val("").trigger("change"), $("#skills_table").append('<tr id="' + c + '"> <td>' + h + "</td><td>" + i + "</td><td>" + j + '</td><td> <input type="hidden" value="' + g + '" id="edit_skill_id' + c + '" ><input type="hidden" value="' + h + '" id="edit_skill_name' + c + '" ><input type="hidden" value="' + i + '" id="edit_skill_level' + c + '" ><input type="hidden" value="' + j + '" id="edit_skill_summary' + c + '" ><a href="javascript:void(0)" class="skill_delete btn btn-success btn-sm" onclick="edit_skill(' + c + ')" data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"> </i> </a> <a href="javascript:void(0)" class="skill_delete btn btn-primary btn-sm" onclick="delete_skill(' + c + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>'), $("#loading_modal").modal("hide"), $("#skill_id").select2("val", ""), $("#skill_level").select2("val", ""), $("#Specialities_form").bootstrapValidator("resetField", "skill_id"), $("#Specialities_form").bootstrapValidator("resetField", "skill_level"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-specialities").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {skill_id: {validators: {notEmpty: {message: "Please enter skill name"}}}, skill_level: {validators: {notEmpty: {message: "Please enter skill level"}}}, skill_summary: {validators: {notEmpty: {message: "Please enter skill summary"}, stringLength: {min: 5, max: 1e3, message: "The skill summary must be beteween 5 to 1000 characters"}, regexp: {regexp: /^[a-zA-Z0-9_@_#$,)(\d\-_.(),\s]+$/i, message: "Please enter valid summary"}}}}}), $("#edit_Specialities_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#eskill_id").val(), f = $("#ed_skill_id").find("option:selected").val(), g = $("#ed_skill_id").find("option:selected").text(), h = $("#ed_skill_level").find("option:selected").val(), i = $("#ed_skill_summary").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/edit_specialities", data: $("#edit_Specialities_form").serialize() + "&id=" + e, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_skill_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_skill_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-specialities").css("overflow-x", "auto"), $("#edit-specialities").css("overflow-y", "auto"), $("#edit-specialities").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $(".pre-loader2").hide();
                        b.data_id;
                        (b.status = "success") ? ($("#edit-specialities").modal("hide"), $("#skills_table #" + e).html(""), $("#skills_table #" + e).append('<td class="" style="">' + g + '</td><td class="" style="">' + h + '</td><td class="" style="">' + i + '</td><td> <input type="hidden" value="' + f + '" id="edit_skill_id' + e + '" ><input type="hidden" value="' + g + '" id="edit_skill_name' + e + '" ><input type="hidden" value="' + h + '" id="edit_skill_level' + e + '" ><input type="hidden" value="' + i + '" id="edit_skill_summary' + e + '" ><a href="javascript:void(0)" class="skill_delete btn btn-success btn-sm" onclick="edit_skill(' + e + ')" data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"> </i> </a> <a href="javascript:void(0)" class="skill_delete btn btn-primary btn-sm" onclick="delete_skill(' + e + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#edit-specialities").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_skill_id: {validators: {notEmpty: {message: "Please enter skill name"}}}, ed_skill_level: {validators: {notEmpty: {message: "Please enter skill level"}}}, ed_skill_summary: {validators: {notEmpty: {message: "Please enter skill summary"}, stringLength: {min: 5, max: 1e3, message: "The skill summary must be beteween 5 to 1000 characters"}, regexp: {regexp: /^[a-zA-Z0-9_@_#$,)(\d\-_.(),\s]+$/i, message: "Please enter valid summary"}}}}}), $("#add_references_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#candidate_id").val(), f = $("#candidate_cnic").val(), g = $("#ref_name").val(), h = $("#ref_job_title").val(), i = $("#ref_company_name").val(), j = $("#ref_phone").val(), k = $("#ref_email").val(), l = $("#ref_relation").find("option:selected").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/references", data: $("#add_references_form").serialize() + "&candidate_cnic=" + f + "&candidate_id=" + e, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_refrence_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_refrence_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-references").css("overflow-x", "auto"), $("#add-references").css("overflow-y", "auto"), $("#add-references").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        var c = b.data_id;
                        (b.status = "success") ? ($("#add-references").modal("hide"), $("#example7 tbody").append('<tr id="' + c + '"> <td class="" style="">' + g + '</td><td class="" style="">' + h + '</td><td class="" style="">' + i + '</td><td class="" style="">' + j + '</td><td class="" style="">' + k + '</td><td class="" style="">' + l + '</td><td><input type="hidden" value="' + g + '" id="edit_ref_name' + c + '"><input type="hidden" value="' + h + '" id="edit_ref_job_title' + c + '"><input type="hidden" value="' + i + '" id="edit_company_name' + c + '"><input type="hidden" value="' + j + '" id="edit_phone' + c + '"><input type="hidden" value="' + k + '" id="edit_email' + c + '"><input type="hidden" value="' + l + '" id="edit_relation' + c + '"> <a href="javascript:void(0)" class="reference_delete btn btn-success btn-sm" onclick="edit_reference(' + c + ')"  data-tooltip="tooltip" title="Edit"> <i class="fa fa-edit" aria-hidden="true"></i></a> <a id="17" href="javascript:void(0)" class="reference_delete btn btn-success btn-sm" onclick="del_reference(' + c + ')" data-tooltip="tooltip" title="Delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>'), $("#loading_modal").modal("hide"), $("#add_references_form").bootstrapValidator("resetForm", !0), $("#ref_relation").select2("val", ""), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-references").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ref_name: {validators: {notEmpty: {message: "Please enter name"}, regexp: {regexp: /^[a-zA-Z .&)(,_-\s]+$/i, message: "Please enter alphabets only"}}}, ref_job_title: {validators: {notEmpty: {message: "Please enter job title"}, regexp: {regexp: /^[a-zA-Z.&)(,_-\s]+$/i, message: "Please enter alphabets only"}}}, company_name: {validators: {notEmpty: {message: "Please enter company"}, regexp: {regexp: /^[a-zA-Z0-9.&)(,_-\s]+$/i, message: "Please enter alphanumerics only"}}}, email: {validators: {notEmpty: {message: "Please enter email"}, regexp: {regexp: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i, message: "Invalid email"}}}, relation: {validators: {notEmpty: {message: "Please enter relation"}, regexp: {regexp: /^[a-z\s]+$/i, message: "Please enter alphabets only"}}}}}), $("#edit_references_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#ed_r_id").val(), f = $("#ed_ref_name").val(), g = $("#ed_ref_job_title").val(), h = $("#ed_ref_company_name").val(), i = $("#ed_ref_phone").val(), j = $("#ed_ref_email").val(), k = $("#ed_ref_relation").find("option:selected").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/edit_references", data: $("#edit_references_form").serialize() + "&id=" + e, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_refrence_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_refrence_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-references").css("overflow-x", "auto"), $("#edit-references").css("overflow-y", "auto"), $("#edit-references").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $(".pre-loader2").hide();
                        var c = b.data_id;
                        (b.status = "success") ? ($("#edit-references").modal("hide"), $("#example7 tbody tr#" + c).html(""), $("#example7 tbody tr#" + c).append('<td class="" style="">' + f + '</td><td class="" style="">' + g + '</td><td class="" style="">' + h + '</td><td class="" style="">' + i + '</td><td class="" style="">' + j + '</td><td class="" style="">' + k + '</td><td><input type="hidden" value="' + f + '" id="edit_ref_name' + c + '"><input type="hidden" value="' + g + '" id="edit_ref_job_title' + c + '"><input type="hidden" value="' + h + '" id="edit_company_name' + c + '"><input type="hidden" value="' + i + '" id="edit_phone' + c + '"><input type="hidden" value="' + j + '" id="edit_email' + c + '"><input type="hidden" value="' + k + '" id="edit_relation' + c + '"> <a href="javascript:void(0)" class="reference_delete btn btn-success btn-sm" onclick="edit_reference(' + c + ')"  data-tooltip="tooltip" title="Edit"> <i class="fa fa-edit" aria-hidden="true"></i></a> <a id="17" href="javascript:void(0)" class="reference_delete btn btn-success btn-sm" onclick="del_reference(' + c + ')" data-tooltip="tooltip" title="Delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#edit-references").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_ref_name: {validators: {notEmpty: {message: "Please enter name"}, regexp: {regexp: /^[a-zA-Z .&)(,_-\s]+$/i, message: "Please enter alphabets only"}}}, ed_ref_job_title: {validators: {notEmpty: {message: "Please enter job title"}, regexp: {regexp: /^[a-zA-Z.&)(,_-\s]+$/i, message: "Please enter alphabets only"}}}, ed_company_name: {validators: {notEmpty: {message: "Please enter company"}, regexp: {regexp: /^[a-zA-Z0-9.&)(,_-\s]+$/i, message: "Please enter alphanumerics only"}}}, ed_email: {validators: {notEmpty: {message: "Please enter email"}, regexp: {regexp: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i, message: "Invalid email"}}}, ed_relation: {validators: {notEmpty: {message: "Please enter relation"}, regexp: {regexp: /^[a-z\s]+$/i, message: "Please enter alphabets only"}}}}}), $("#add_training_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#candidate_id").val(), f = $("#candidate_cnic").val(), g = $("#course_name").val(), h = $("#organizer_body").val(), i = $("#training_start_date_2").val(), j = $("#training_end_date").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/training", data: $("#add_training_form").serialize() + "&candidate_cnic=" + f + "&candidate_id=" + e, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_training_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_training_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-training").css("overflow-x", "auto"), $("#add-training").css("overflow-y", "auto"), $("#add-training").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        var c = b.data_id;
                        (b.status = "success") ? ($("#training_table tbody").append('<tr id="' + c + '"> <td>' + g + "</td><td>" + h + "</td><td>" + i + "</td><td>" + j + '</td><td><input type="hidden" value="' + g + '" id="edit_course_name' + c + '"><input type="hidden" value="' + h + '" id="edit_organizer_body' + c + '"><input type="hidden" value="' + i + '" id="edit_start_date' + c + '"><input type="hidden" value="' + j + '" id="edit_end_date' + c + '"><a href="javascript:void(0)" class="education_delete btn btn-success btn-sm" onclick="edit_training(' + c + ')"  data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="training_delete btn btn-primary btn-sm" onclick="delete_training(' + c + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>'), $("#add_training_form").bootstrapValidator("resetForm", !0), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-training").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {course_name: {validators: {notEmpty: {message: "Please enter course name"}, stringLength: {min: 1, max: 50, message: "The training name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 .&#_+)(]+$/i, message: "Please enter valid input"}}}, organizer_body: {validators: {notEmpty: {message: "Please enter institute"}, stringLength: {min: 1, max: 50, message: "The institute name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 .&#_)(]+$/i, message: "Please enter valid input"}}}, train_start_date: {validators: {notEmpty: {message: "Please enter start date"}}}, train_end_date: {validators: {notEmpty: {message: "Please enter end date"}}}}}), $("#edit_training_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), f = ($("#candidate_cnic").val(), $("#training_id").val());
            return course_name = $("#ed_course_name").val(), organizer_body = $("#ed_organizer_body").val(), start_date = $("#ed_training_start_date_1").val(), end_date = $("#ed_training_end_date").val(), $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/edit_training", data: $("#edit_training_form").serialize() + "&id=" + f, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_training_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_training_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-training").css("overflow-x", "auto"), $("#edit-training").css("overflow-y", "auto"), $("#edit-training").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $(".pre-loader2").hide();
                        var c = b.data_id;
                        (b.status = "success") ? ($("#edit-training").modal("hide"), $("#training_table tbody tr#" + c).html(""), $("#training_table tbody tr#" + c).append("<td>" + course_name + "</td><td>" + organizer_body + "</td><td>" + start_date + "</td><td>" + end_date + '</td><td><input type="hidden" value="' + course_name + '" id="edit_course_name' + c + '"><input type="hidden" value="' + organizer_body + '" id="edit_organizer_body' + c + '"><input type="hidden" value="' + start_date + '" id="edit_start_date' + c + '"><input type="hidden" value="' + end_date + '" id="edit_end_date' + c + '"><a href="javascript:void(0)" class="education_delete btn btn-success btn-sm" onclick="edit_training(' + c + ')"  data-tooltip="tooltip" title="Edit"><i class="fa fa-edit" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="training_delete btn btn-primary btn-sm" onclick="delete_training(' + c + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-training").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_course_name: {validators: {notEmpty: {message: "Please enter course name"}, stringLength: {min: 1, max: 50, message: "The institute name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 .&#_+)(]+$/i, message: "Please enter valid input"}}}, ed_organizer_body: {validators: {notEmpty: {message: "Please enter institute"}, stringLength: {min: 1, max: 50, message: "The institute name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[-a-zA-Z0-9 .&#_)(]+$/i, message: "Please enter valid input"}}}, ed_training_start_date: {validators: {notEmpty: {message: "Please enter start date"}}}, ed_training_end_date: {validators: {notEmpty: {message: "Please enter end date"}}}}}), $("#add_certification_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#candidate_id").val(), f = $("#candidate_cnic").val(), g = $("#certificate_name").val(), h = $("#training_institute").val(), i = $("#valid_till").val();
            var certificate_name = $("#certificate_name option:selected").text();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/certification", data: $("#add_certification_form").serialize() + "&candidate_cnic=" + f + "&candidate_id=" + e, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_certification_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_certification_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-certification").css("overflow-x", "auto"), $("#add-certification").css("overflow-y", "auto"), $("#add-certification").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        var c = b.data_id;
                        (b.status = "success") ? ($("#add-certification").modal("hide"), $("#certification_table tbody").append('<tr id="' + c + '"> <td>' + certificate_name + "</td><td>" + h + "</td><td>" + i + '</td><td><input type="hidden" value="' + certificate_name + '" id="edit_certificate_name' + c + '"><input type="hidden" value="' + g + '" id="edit_certificate_id' + c + '"><input type="hidden" value="' + h + '" id="edit_training_institute' + c + '"><input type="hidden" value="' + i + '" id="edit_valid_till' + c + '"> <a href="javascript:void(0)" class="certification_delete btn btn-success btn-sm" onclick="edit_cert(' + c + ')" data-tooltip="tooltip" title="Edit" > <i class="fa fa-edit" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="certification_delete btn btn-primary btn-sm" onclick="del_cert(' + c + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>'), $("#loading_modal").modal("hide"), $("#add_certification_form").bootstrapValidator("resetForm", !0), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-certification").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {certificate_name: {validators: {notEmpty: {message: "Please enter certification"}, stringLength: {min: 1, max: 50, message: "The certification name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[a-zA-Z0-9@#&)(,_-\s]+$/i, message: "Please enter alphanumerics only"}}}, training_institute: {validators: {notEmpty: {message: "Please enter institute"}, stringLength: {min: 1, max: 50, message: "The institue name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[a-zA-Z0-9@#&)(,_-\s]+$/i, message: "Please enter alphanumerics only"}}}, valid_till: {validators: {notEmpty: {message: "Please enter valid till date"}}}}}), $("#edit_certification_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), f = ($("#candidate_cnic").val(), $("#cert_id").val()), g = $("#ed_certificate_name option:selected").text(), j = $("#ed_certificate_name").val(), h = $("#ed_training_institute").val(), i = $("#ed_valid_till").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/edit_certification", data: $("#edit_certification_form").serialize() + "&id=" + f, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_certification_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_certification_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-training").css("overflow-x", "auto"), $("#edit-training").css("overflow-y", "auto"), $("#edit-training").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $(".pre-loader2").hide();
                        var c = b.data_id;
                        (b.status = "success") ? ($("#edit-certification").modal("hide"), $("#certification_table tbody tr#" + f).html(""), $("#certification_table tbody tr#" + f).append("<td>" + g + "</td><td>" + h + "</td><td>" + i + '</td><td><input type="hidden" value="' + j + '" id="edit_certificate_id' + c + '"><input type="hidden" value="' + g + '" id="edit_certificate_name' + c + '"><input type="hidden" value="' + h + '" id="edit_training_institute' + c + '"><input type="hidden" value="' + i + '" id="edit_valid_till' + c + '"> <a href="javascript:void(0)" class="certification_delete btn btn-success btn-sm" onclick="edit_cert(' + c + ')" data-tooltip="tooltip" title="Edit" > <i class="fa fa-edit" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="certification_delete btn btn-primary btn-sm" onclick="del_cert(' + c + ')" data-tooltip="tooltip" title="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#edit-certification").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_certificate_name: {validators: {notEmpty: {message: "Please enter certification"}, stringLength: {min: 1, max: 50, message: "The certification name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[a-zA-Z0-9@#&)(,_-\s]+$/i, message: "Please enter alphanumerics only"}}}, ed_training_institute: {validators: {notEmpty: {message: "Please enter institute"}, stringLength: {min: 1, max: 50, message: "The institue name must be beteween 1 to 50 characters"}, regexp: {regexp: /^[a-zA-Z0-9@#&)(,_-\s]+$/i, message: "Please enter alphabets only"}}}, ed_valid_till: {validators: {notEmpty: {message: "Please enter valid till date"}}}}}), $("#add_research_work_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#research_name").val(), f = $("#publication_venue").val(), g = $("#publication_link").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/research", data: $("#add_research_work_form").serialize(), type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#add_research_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#add_research_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#add-research-work").css("overflow-x", "auto"), $("#add-research-work").css("overflow-y", "auto"), $("#add-research-work").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        var c = b.data_id;
                        (b.status = "success") ? ($("#add-research-work").modal("hide"), $("#research_table tbody").append('<tr id="' + c + '"> <td class="" style="">' + e + '</td><td class="" style="">' + f + '</td><td class="" style="">' + g + '</td><td><input type="hidden" value="' + e + '" id="edit_research_name' + c + '"><input type="hidden" value="' + f + '" id="edit_publication_venue' + c + '"><input type="hidden" value="' + g + '" id="edit_publication_link' + c + '"> <a href="javascript:void(0)" class="membership_delete btn btn-success btn-sm" onclick="edit_research(' + c + ')"  data-tooltip="tooltip" title="Edit"> <i class="fa fa-edit" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="research_delete btn btn-success btn-sm" onclick="delete_research(' + c + ')" data-tooltip="tooltip" title="Delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td></tr>'), $("#loading_modal").modal("hide"), $("#add_research_work_form").bootstrapValidator("resetForm", !0), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data inserted successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#add-research-work").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {research_name: {validators: {notEmpty: {message: "Please enter research title"}, stringLength: {min: 1, max: 150, message: "The research title must be beteween 1 to 150 characters"}, regexp: {regexp: /^[a-zA-Z0-9 #_@)(,-.\s]+$/i, message: "Please enter alphanumerics only"}}}, publication_venue: {validators: {notEmpty: {message: "Please enter research venue"}, stringLength: {min: 1, max: 100, message: "The research venue must be beteween 1 to 100 characters"}, regexp: {regexp: /^[a-zA-Z0-9#@)(,-.\s]+$/i, message: "Please enter alphanumerics only"}}}, publication_link: {validators: {notEmpty: {message: "Please enter venue"}, uri: {message: "The publication link is not valid url"}}}}}), $("#edit_researchs_form").bootstrapValidator({excluded: [":disabled"], feedbackIcons: {valid: "glyphicon glyphicon-ok", invalid: "glyphicon glyphicon-remove", validating: "glyphicon glyphicon-refresh"}, submitHandler: function (a, b, c) {
            var d = $("#url").val(), e = $("#ed_research_name").val(), f = $("#ed_publication_venue").val(), g = $("#ed_publication_link").val(), h = $("#ed_res_id").val();
            return $("#loading_modal").modal("show"), $.ajax({url: d + "new_profile_builder/edit_research", data: $("#edit_researchs_form").serialize() + "&id=" + h, type: "POST", success: function (a) {
                    setTimeout(function () {
                        var b = $.parseJSON(a);
                        if ("validation" == b.status)
                            return $("#edit_research_validation_erros").html(""), $(b.errors).each(function (a, b) {
                                $("#edit_research_validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>")
                            }), $("#edit-research").css("overflow-x", "auto"), $("#edit-research").css("overflow-y", "auto"), $("#edit-research").animate({scrollTop: 0}, 600), $("#loading_modal").modal("hide"), !1;
                        $(".pre-loader2").hide();
                        var c = b.data_id;
                        (b.status = "success") ? ($("#edit-research").modal("hide"), $("#research_table tbody tr#" + c).html(""), $("#research_table tbody tr#" + c).append('<td class="" style="">' + e + '</td><td class="" style="">' + f + '</td><td class="" style="">' + g + '</td><td><input type="hidden" value="' + e + '" id="edit_research_name' + c + '"><input type="hidden" value="' + f + '" id="edit_publication_venue' + c + '"><input type="hidden" value="' + g + '" id="edit_publication_link' + c + '"> <a href="javascript:void(0)" class="membership_delete btn btn-success btn-sm" onclick="edit_research(' + c + ')"  data-tooltip="tooltip" title="Edit"> <i class="fa fa-edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="research_delete btn btn-success btn-sm" onclick="delete_research(' + c + ')" data-tooltip="tooltip" title="Delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>'), $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong>  Data updated successfully</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)) : ($("#edit-research").modal("hide"), $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Data already exists! or Incompatible Data!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300))
                    }, 1e3)
                }, error: function (a) {
                    $("#loading_modal").modal("hide"), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }}), !1
        }, fields: {ed_research_name: {validators: {notEmpty: {message: "Please enter research title"}, stringLength: {min: 1, max: 150, message: "The research title must be beteween 1 to 150 characters"}, regexp: {regexp: /^[a-zA-Z0-9 #_@)(,-.\s]+$/i, message: "Please enter alphanumerics only"}}}, ed_publication_venue: {validators: {notEmpty: {message: "Please enter research venue"}, stringLength: {min: 1, max: 100, message: "The research venue must be beteween 1 to 100 characters"}, regexp: {regexp: /^[a-zA-Z0-9#@)(,-.\s]+$/i, message: "Please enter alphanumerics only"}}}, ed_publication_link: {validators: {notEmpty: {message: "Please enter venue"}, uri: {message: "The publication link is not valid url"}}}}})
}), 
$(function () {
    $(".dependent_delete").click(function () {
        var a = $(this).attr("id");
        $("#yes_delete_dependent").click(function () {
            var b = $("#url").attr("value");
            $.ajax({url: b + "profile_builder/delete_dependents/" + a}), $("#dependent_" + a).hide(), $("#delete_dependents").modal("hide"), Toast.success("Record Has Been Deleted")
        })
    })
}), 
$(document).ready(function (a) {
    
    function c(a) {
        if (a.files && a.files[0]) {
            var b = new FileReader;
            b.onload = function (a) {
                $(".preview").attr("src", a.target.result)
            }, b.readAsDataURL(a.files[0])
        }
    }
    $(document).bind("contextmenu", function (a) {
        a.preventDefault()
    }), 
    $(document).keydown(function (a) {
        
        if (123 === a.which)
            return!1;
        handleKeyDown(a)
    }), 
    $(".s2").select2();
    
    $("#country_id").on("change", function (a) {
        "Pakistan" == $("#country_id").select2("val") ? ($("#city_select").show(),$("#city").prop("disabled", 0), $("#information_profile").bootstrapValidator("resetField", "txt_city"), $("#txt_city").val(""), $("#txt_city").hide(), $("#txt_city").prop("disabled", !0)) : ($("#city").select2("val", ""), $("#information_profile").bootstrapValidator("resetField", "txt_city"), $("#txt_city").prop("disabled", !1),$("#city").prop("disabled", 1) , $("#txt_city").val(""), $("#city_select").hide(), $("#txt_city").show())
    }), $("#uploadForm").on("change", function (a) {
        a.preventDefault(), $(".hide_div").css("display", "block");
        var b = $("#url").attr("value"), e = ($("#candidate_id").val(), $("#fileToUpload")[0].files[0]), f = (e.size / 1048576).toFixed(2);
        return e.type.match("doc|pdf|msword|docx") ? f < 3 ? (c(this), void("" != $("#fileToUpload").val() && $.ajax({url: b + "new_profile_builder/upload_resume", type: "POST", data: new FormData(this), contentType: !1, cache: !1, processData: !1, success: function (a) {
                if ("failed" == a)
                    $("#fileToUpload").val(""), $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Failure! </strong>  Invalid Format or exceed Max Size</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300), $(".hide_div").css("display", "none");
                else {
                    $("#fileToUpload").val(""), $(".hide_div").css("display", "none");
                    $(".notification").html("<div class='alert success_alert'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times; </a> <strong> Success! </strong> Uploaded</div>").fadeIn(300), $(".notification").delay(3200).fadeOut(300)
                }
            }, error: function (a) {
            }}))) : ($(".toast-error").hide(), Toast.error("File size is too large. Maximum 2 MB allowed"), !1) : ($(".toast-error").hide(), Toast.error("This is not a pdf or doc file"), !1)
    }), 
    $("#add-emp-job-information").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','add-emp-job-information');
        $("#add_employee_job_information").bootstrapValidator("resetField", "desig_start_date"), $("#add_employee_job_information").bootstrapValidator("resetField", "desig_end_date"), $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#add-emp-job-information").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#add_employee_job_information").trigger('reset'), $('#job_level').val(null).trigger('change'), $('#job_country').val(null).trigger('change'), $("#add_employee_job_information").bootstrapValidator("resetField", 'job_level'), $("#add_employee_job_information").bootstrapValidator("resetField", 'job_country'), $("#add_job_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#edit-emp-job-information").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','edit-emp-job-information');
        $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_start_date");
        $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_end_date");
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#edit-emp-job-information").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#edit_employee_job_information").bootstrapValidator("resetForm", !0), $(".ed_job_inf_select").select2("val", ""), $("#edit_job_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#add-degree-information").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','add-degree-information');
        loadSelect2inModalById('f_degree_level','add-degree-information');
        loadSelect2inModalById('position_degree','add-degree-information');
        $('#f_degree_level').val(null).trigger('change');
        $('#academic_institute').val(null).trigger('change');
        $('#degree_country').val(null).trigger('change');
        $('#degree_position').val(null).trigger('change');
        $('#degree_is_cgpa').val(null).trigger('change');
        $("#add_degree_information_form").bootstrapValidator("resetField", "degree_level"), $("#add_degree_information_form").bootstrapValidator("resetField", "academic_institute"), $("#add_degree_information_form").bootstrapValidator("resetField", "degree_country"), $("#add_degree_information_form").bootstrapValidator("resetField", "degree_start_date"), $("#add_degree_information_form").bootstrapValidator("resetField", "degree_end_date"), $(".add_degree_select").select2("val", ""), $('#add_degree_information_form').trigger("reset");
        $("#add_degree_validation_erros").html("")
    }), 
    $("#add-degree-information").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $(".add_degree_select").select2("val", ""), $(".common_disable").prop("disabled", !1), $("#add_degree_validation_erros").html("")
    }), 
    $("#edit-degree-information").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','edit-degree-information');
        loadSelect2inModalById('f_degree_level_edit','edit-degree-information');
        loadSelect2inModalById('ed_degree_name','edit-degree-information');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden");
        var deg_level = $('#f_degree_level_edit').val();
        if (deg_level == 'D1' || deg_level == 'D2' || deg_level == 'D13') {
            $('#ed_academic_institute').prop('disabled', false);
            $('#ed_degree_country').prop('disabled', false);
            $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_degree_start_date"), $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_degree_name"), $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_academic_institute");
            $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_degree_country");
            $('#ed_academic_institute').prop('disabled', true);
            $('#ed_degree_country').prop('disabled', true);
        } else {
            $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_degree_start_date"), $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_degree_name"), $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_academic_institute");
            $("#edit_degree_information_form").bootstrapValidator("resetField", "ed_degree_country");
        }
    }), 
    $("#edit-degree-information").on("hidden.bs.modal", function () {
        $('.ss').select2();
        document.getElementById("edit_degree_information_form").reset(), $("#edit_degree_information_form").bootstrapValidator("resetForm", !0), $(".ed_degree_select").select2("val", ""), $(".ed_common_disable").prop("disabled", !1), $("#edit_degree_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#add-specialities").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','add-specialities');
        $("#skill_id").val(null).trigger('change'), $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden"), $("#Specialities_form").bootstrapValidator("resetForm", true)
    }), 
    $("#add-specialities").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#Specialities_form").bootstrapValidator("resetForm", !0), $(".add_skill_select").select2("val", ""), $("#add_skill_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#edit-specialities").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','edit-specialities');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#edit-specialities").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#edit_Specialities_form").bootstrapValidator("resetForm", !0), $(".ed_skill_select").select2("val", ""), $("#edit_skill_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#add-training").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','add-training');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#add-training").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#add_training_form").bootstrapValidator("resetForm", !0), $("#add_training_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#edit-training").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','edit-training');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden"), $("#edit_training_form").bootstrapValidator("resetField", "ed_training_start_date"), $('#ed_training_end_date').attr('disabled', false);
    }), 
    $("#edit-training").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#edit_training_form").bootstrapValidator("resetForm", !0), $("#edit_training_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $("#add-certification").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','add-certification');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#add-certification").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#add_certification_form").bootstrapValidator("resetForm", !0), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto"), $("#add_certification_validation_erros").html("")
    }), 
    $("#edit-certification").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','edit-certification');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#edit-certification").on("hidden.bs.modal", function () {
       $('.ss').select2();
        $("#edit_certification_form").bootstrapValidator("resetForm", !0), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto"), $("#edit_certification_validation_erros").html("")
    }), 
    $("#add-research-work").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','add-research-work');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#add-research-work").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#add_research_work_form").bootstrapValidator("resetForm", !0), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto"), $("#add_research_validation_erros").html("")
    }), 
    $("#edit-research").on("shown.bs.modal", function () {
        loadSelect2inModal('ss','edit-research');
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#edit-research").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#edit_researchs_form").bootstrapValidator("resetForm", !0), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto"), $("#edit_research_validation_erros").html("")
    }), 
    $("#add-references").on("shown.bs.modal", function () {
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#add-references").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#add_references_form").bootstrapValidator("resetForm", !0), $(".add_ref_select").select2("val", ""), $("#add_refrence_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }),
    $("#edit-references").on("shown.bs.modal", function () {
        $("html").css("overflow-x", "hidden"), $("html").css("overflow-y", "hidden")
    }), 
    $("#edit-references").on("hidden.bs.modal", function () {
        $('.ss').select2();
        $("#edit_references_form").bootstrapValidator("resetForm", !0), $(".ed_ref_select").select2("val", ""), $("#add_refrence_validation_erros").html(""), $("html").css("overflow-x", "auto"), $("html").css("overflow-y", "auto")
    }), 
    $(".tool").each(function (a, b) {
        $(this).tooltip()
    }), 
    $("#desig_start_date_1").on("click", function () {
        $("#present_div").show()
    }), $("#present").on("click", function () {
        1 == $("#present").val() ? ($("#present").removeAttr("Checked"), $("#present").val(0)) : ($("#present").attr("Checked", "Checked"), $("#present").val(1)), document.getElementById("present").checked ? ($("#desig_end_date").val(""), $("#add_work_attach_document").val(""), $("#add_employee_job_information").bootstrapValidator("resetField", "desig_end_date"), $("#add_employee_job_information").bootstrapValidator("resetField", "add_work_attach_document"), $("#desig_end_date").attr("disabled", !0), $("#add_work_attach_document").attr("disabled", !0)) : ($("#add_employee_job_information").bootstrapValidator("resetField", "desig_end_date"), $("#add_employee_job_information").bootstrapValidator("resetField", "add_work_attach_document"), $("#desig_end_date").attr("disabled", !1), $("#add_work_attach_document").attr("disabled", !1))
    }), $("#ed_present").on("click", function () {
        1 == $("#ed_present").val() ? ($("#ed_present").removeAttr("Checked"), $("#ed_present").val(0), $("#ed_work_attach_document").attr("disabled", !1)) : ($("#ed_present").attr("Checked", "Checked"), $("#ed_present").val(1), $("#ed_work_attach_document").attr("disabled", !0)), document.getElementById("ed_present").checked ? ($("#ed_desig_end_date").val(""), $("#ed_work_attach_document").val(""), $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_end_date"), $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_work_attach_document"), $("#ed_desig_end_date").attr("disabled", !0), $("#ed_work_attach_document").attr("disabled", !0)) : ($("#edit_employee_job_information").bootstrapValidator("resetField", "ed_desig_end_date"), $("#edit_employee_job_information").bootstrapValidator("resetField", "ed_work_attach_document"), $("#ed_desig_end_date").attr("disabled", !1), $("#ed_work_attach_document").attr("disabled", !1))
    }),
    $("#is_gov_off").on("click", function () {
        if($("#is_gov_off").attr('checked') == 'checked'){
            $("#is_gov_off").val(1);            $("#cand_noc").prop('disabled',false);
            $('#noc_div').show();
        }else{
            $("#is_gov_off").val(0);
            $("#cand_noc").val('');
            $("#cand_noc").prop('disabled',true);
            $('#noc_div').hide();
        }
    });
    if($('#is_gov_off').val() == 1){
        $("#is_gov_off").prop('checked',true);
        $("#cand_noc").prop('disabled',false);
    }else if($('#is_gov_off').val() == 0){
        $("#is_gov_off").prop('checked',false);
        $("#cand_noc").prop('disabled',true);
    }
    $("#is_disabled").on("click", function () {
        if($("#is_disabled").attr('checked') == 'checked'){
            $("#is_disabled").val(1);
        }else{
            $("#is_disabled").val(0);
        }
    });
    if($('#is_disabled').val() == 1){
        $("#is_disabled").prop('checked',true);
    }else if($('#is_disabled').val() == 0){
        $("#is_disabled").prop('checked',false);
    }
    
    var country = $("#country_id").select2("val");
    //console.log("940:"+country);
    if(country == "Pakistan"){
        $("#city_select").show(); 
        $("#txt_city").hide();
        $("#txt_city").prop('disabled',true);
        
    }else{
        $("#city_select").hide(); 
        $("#txt_city").show();
        $("#txt_city").prop('disabled',false);
    }
});
//noc_div