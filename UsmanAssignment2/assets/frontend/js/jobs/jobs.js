function GetMonthName(monthNumber){var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return months[monthNumber-1];}
function filteredDistricts(val){
    var dataArray;
    var baseUrl=$('#baseUrl').val();dataArray={'districtId':val,'status':"filterDistrict"};
    $("#loading_modal").modal('show');
    $.ajax({url:baseUrl+"new_recruit/jobFilteredList",data:dataArray,type:"POST",
        success:function(data){setTimeout(function(){$("#loading_modal").modal('hide');
                var jsonDecode=$.parseJSON(data);var jobs=jsonDecode.allJobs;
                var pagination=jsonDecode.pagination;
                var html='';if(jobs===undefined||jobs.length==0){html+='<li class="job_listing">';html+='<a href="#">Sorry! No Jobs Found</a>';html+='</li>'}else{html=createHtml(jobs);}
                $('#myTable').DataTable().destroy();
                $('.job_listingsAjax').html('');
                $('.job_listingsAjax').html(''+html+'');
                $('#myTable').DataTable();
                $('.pagination_link').html('');
                $('.pagination_link').html(pagination);},3000);},
        error:function(xhr,status,error){}
    });
}
function filteredIndustry(val){var dataArray;var baseUrl=$('#baseUrl').val();dataArray={'industryId':val,'status':"filterIndustry"};$("#loading_modal").modal('show');
    $.ajax({url:baseUrl+"new_recruit/jobFilteredList",data:dataArray,type:"POST",success:function(data){setTimeout(function(){$("#loading_modal").modal('hide');var jsonDecode=$.parseJSON(data);var jobs=jsonDecode.allJobs;var pagination=jsonDecode.pagination;var html='';if(jobs===undefined||jobs.length==0){html+='<li class="job_listing">';html+='<a href="#">Sorry! No Jobs Found</a>';html+='</li>'}else{html=createHtml(jobs);}$('#myTable').DataTable().destroy();$('.job_listingsAjax').html('');$('.job_listingsAjax').html(''+html+'');$('#myTable').DataTable();$('.pagination_link').html('');$('.pagination_link').html(pagination);},1000);},error:function(xhr,status,error){}});}
function saveJob(val){var id=val;var base_url=$('#baseUrl').val();var post_job_id='post_job_id'+val;$("#loading_modal").modal('show');$.ajax({data:{'id':id,'post_job_id':post_job_id},url:base_url+'new_recruit/save_job',type:"POST",success:function(data){setTimeout(function(){$("#loading_modal").modal('hide');if(data=='success'){$('.toast-success').hide();$(".notification").html("<div class='alert success_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> <strong> Job </strong> Has Been Saved Successfully</div>").fadeIn(300);}if(data=='not logged in'){$('.toast-error').hide();$(".notification").html("<div class='alert danger_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> <strong> Login </strong> to save Job !</div>").fadeIn(300);}if(data=='fail'){$('.toast-warning').hide();$(".notification").html("<div class='alert danger_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> <strong> Job </strong> is Already Saved!</div>").fadeIn(300);}$(".alert").fadeTo(2000,500).slideUp(500,function(){$(".alert").slideUp(500);});},1000);}});}
function filterRange(formId){var dayFrom=$("input[name=dayFrom]").val();var dayTo=$("input[name=dayTo]").val();var salaryFrom=$("input[name=salaryFrom]").val();var salaryTo=$("input[name=salaryTo]").val();$("#loading_modal").modal('show');if(dayFrom==''||dayTo==''||salaryFrom==''||salaryTo==''){alert('i m here.....')}else{var baseUrl=$('#baseUrl').val();
        $.ajax({url:baseUrl+"new_recruit/jobFilteredList",data:$('#'+formId).serialize(),type:"POST",success:function(data){setTimeout(function(){$("#loading_modal").modal('hide');var jsonDecode=$.parseJSON(data);var jobs=jsonDecode.allJobs;var pagination=jsonDecode.pagination;var html='';if(jobs===undefined||jobs.length==0){html+='<div class="jobs-item with-thumb">';html+='<p style="margin:5px 20px  1px 200px;font-size:20px">Sorry! No Jobs Found</p>';html+='</div>'}else{html=createHtml(jobs);}$('#myTable').DataTable().destroy();$('.job_listingsAjax').html('');$('.job_listingsAjax').html(''+html+'');$('#myTable').DataTable();$('.pagination_link').html('');$('.pagination_link').html(pagination);abc('jobs-view-toggle');def('jobs-item');},1000);},error:function(data){}});}}
function createHtml(jobs){var baseUrl=$('#baseUrl').val();var html='';html+='<div class="candidates-item candidates-single-item">'+'<div class="job_listings job_listingsAjax">'+'<div class="table-responsive">'+'<table class="table table-hover" id="myTable">'+'<thead>'+'<tr>'+'<th scope="col">Job Title</th>'+'<th scope="col">Department</th>'+'<th scope="col">Project</th>'+'<th scope="col">Province</th>'+'<th scope="col">Posted</th>'+'<th scope="col"></th>'+'</tr>'+'</thead>'+'<tbody>';$(jobs).each(function(index,element){html+='<tr>';html+='<td data-label="Job Title"><strong><a href="'+baseUrl+'/new_recruit/job_detail/'+element.slug+'">'+element.job_title+'</a></strong></td>';html+='<td data-label="Department">'+element.company_name+'</td>';html+='<td data-label="Project">'+element.job_department+'</td>';html+='<td data-label="Province">'+element.job_province+'</td>';html+='<td data-label="Posted">'+element.days_past+' days ago</td>';html+='<td data-label=""><div class="new_actions">';html+='<button class="btn btn-success btn-sm" onclick="saveJob('+element.id+')"><span class="fa fa-floppy-o"></span></button> ';html+='<button class="btn btn-primary btn-sm" onclick="applyJob('+element.id+",'"+element.job_title+"','"+element.job_type+"','"+element.job_min_salary+"-"+element.job_max_salary+"'"+')">Apply</button>';html+='</div>';html+='</td>';html+='</tr>';});html+='</tbody>'+'</table>'+'</div></div></div>'+'<div class="clearfix"></div>'+'<div class="col-lg-12">'+'<div class="pull-right pagination_link">'+'</div></div>';return html;}
function homeSearch(){var baseurl=$('#baseUrl').val();var salary=$('#home_search').find($('#salary')).html();var days_pub=$('#home_search').find($('#days_pub')).html();$("#loading_modal").modal('show');$.ajax({url:baseurl+"new_recruit/homeSearch",data:$('#home_search').serialize()+'&salary='+salary+'&days_pub='+days_pub,type:"POST",success:function(data){setTimeout(function(){$("#loading_modal").modal('hide');var jsonDecode=$.parseJSON(data);var jobs=jsonDecode.allJobs;var html='';if(jobs===undefined||jobs.length==0){html+='<li class="job_listing">';html+='<a href="#">Sorry! No Jobs Found</a>';html+='</li>'}else{$(jobs).each(function(indi,ele){html+='<div class="latest-jobs-section white-container">'+'<div class="flexslider clearfix">'+'<ul class="slides">'+'<li>'+'<div class="image">'+'<img src="'+baseurl+'assets/frontend/img/dummyimage.jpg" alt="">'+'<a href="'+baseurl+'new_recruit/job_detail/'+ele.position_id+'" class="btn btn-default fa fa-search"></a>'+'<a href="#" class="btn btn-default fa fa-link"></a>'+'</div>'+'<div class="content">'+'<h6 style="color:#000;">'+ele.job_title+'</h6>'+'<span class="location">'+ele.districtName+'</span>'+'<p class="description" sytle="color:#000; font-weight;normal;">'+''+ele.description.substring(0,200)+'... '+'</p>'+'<a href="'+baseurl+'new_recruit/job_detail/'+ele.position_id+'" class="read-more">Read More</a>'+'</div>'+'</li>'+'</ul>'+'</div>'+'</div>';});}$('.page-content').html(html);$('.flexslider').removeData("flexslider");$('.flexslider').flexslider();},1000);},error:function(data){$("#loading_modal").modal('hide');$(".notification").html("<div class='alert danger_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> <strong> Failure! </strong>  Error occured!</div>").fadeIn(300);}});return false;}
function applyJob(val,title,type,salary){$("#login").css("z-index","999");$('#job_id').val(val);$('#job_name').val(title);$('#job_type').val(type);$('#job_salary').val(salary);if($('#is_logged_in').val()==0){$('#login').modal('show');}else{$('#myModal1').modal('show');}}
function applyJob1(slug){
    var baseUrl=$('#baseUrl').val();
    window.location.replace(baseUrl+"new_recruit/job_detail/"+slug);
    return false;
}
function filterTypeCareer(){var jobType=[];var careerLevel;if($("input[name='checkbox']").is(':checked')){$.each($("input[name='checkbox']:checked"),function(){jobType.push($(this).val());});jobType.join(',');}if($("input[name='radio']").is(':checked')){careerLevel=$("input[name='radio']:checked").val();}var dataArray;var baseUrl=$('#baseUrl').val();dataArray={'jobType':jobType,'careerLevel':careerLevel,'status':"filterTypeCareer"};$("#loading_modal").modal('show');
    $.ajax({url:baseUrl+"new_recruit/jobFilteredList",data:dataArray,type:"POST",success:function(data){setTimeout(function(){$("#loading_modal").modal('hide');var jsonDecode=$.parseJSON(data);var jobs=jsonDecode.allJobs;var pagination=jsonDecode.pagination;var html='';
                if(jobs===undefined||jobs.length==0){html+='<li class="job_listing">';html+='<a href="#">Sorry! No Jobs Found</a>';html+='</li>'}else{$('#myTable').DataTable().destroy();html=createHtml(jobs);}$('#myTable').DataTable().destroy();$('.job_listingsAjax').html('');$('.job_listingsAjax').html(html);$('#myTable').DataTable();$('.pagination_link').html('');$('.pagination_link').html(pagination);},1000);},error:function(xhr,status,error){}});}
function loadAjaxresponse(pagination_ele,dom_ele){$('body').on('click',pagination_ele,function(){var theUrl=$(this).attr('href');if(theUrl!='#'){$(dom_ele).load(theUrl);}return false;});}
loadAjaxresponse('.pagination_new a','.save_job_listings');
loadAjaxresponse('.pagination_new a','.job_listingsAjax');
loadAjaxresponse('.pagination_new a','.departments_list');
$(".filterTypeCareer").click(function(){filterTypeCareer();});
$('#career-clear').click(function(){var object=$('input[type="radio"][name="radio"]');$(object).prop('checked',false);filterTypeCareer();});
$('#contract-clear').click(function(){var object=$('input[type="checkbox"][name="checkbox"]');$(object).prop('checked',false);filterTypeCareer();});
$('#job_apply_form__').bootstrapValidator({
    framework:'bootstrap',
    excluded:[':disabled'],
    feedbackIcons:{valid:'glyphicon glyphicon-ok',invalid:'glyphicon glyphicon-remove',validating:'glyphicon glyphicon-refresh'},
    fields:{
        current_salary:{validators:{notEmpty:{message:'Current Salary is required'}
    },regexp: {regexp: /^\d{1,6}(-?)?\d{1,6}$/i, message: "Invalid format."}},
        expected_salary:{validators:{notEmpty:{message:'Expected Salary is required'}},regexp: {regexp: /^\d{1,6}(-?)?\d{1,6}$/i, message: "Invalid format."}},
        freelance_r: {validators: {notEmpty: {message: "Please select weather you are Freelancer or not?"}}},
        freelance_profile: {validators: {notEmpty: {message: "Please enter profile link"}, uri: {message: "The freelance profile link is not valid url"}}},
        freelance_profile2: {validators: {notEmpty: {message: "Please enter 2nd profile link"},different: {field: 'freelance_profile',message: 'The 1st & 2nd profile link cannot be same'} ,uri: {message: "The freelance profile link is not valid url"}}}
//        req_exp:{validators:{notEmpty:{message:'Please select value.'},between: {min: 0,max: 1,message: 'The longitude must be between 0 and 1.'
//                    }}},
//        cov_let:{validators:{notEmpty:{message:'Please enter details.'},stringLength:{
//                        message: 'Max 1000 characters.',
//                        max: function (value, validator, $field) {
//                            return 1000 - (value.match(/\r/g) || []).length;
//                        }},
//                        regexp: {regexp: /^[a-zA-Z0-9&-_,\s]+$/i, message: "Invalid format."}}},
        }, 
    submitHandler:function(validator,form,submitButton){
                    //$(".pre-loader").modal('show');
                    $(".pre-loader").css('display','block');
                    //$("#myModal1").css("z-index","0");
                    var base_url=$('#baseUrl').val();
                    $.ajax({
                        url:base_url+"new_profile_builder/apply_for_job",
                        data:$('#job_apply_form').serialize(),
                        type:"POST",
                        success:function(data){
                            var data=$.parseJSON(data);
                            //$(".pre-loader").modal('hide');
                            $(".pre-loader").css('display','none');
                            //$(".pre-loader").css('display','none');
                            if(data.status=='success'){
                                $("#validation_erros").html("");
                                $('#myModal1').modal('hide');
                                var phoneNo=data.mobileNum;
                                var job_name=$("#job_name").val();
                                $(".notification").html("<div class='alert success_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> "+data.message+" "+job_name+"</div>").fadeIn(300);
                                $('.applyButton').remove();
                                $('.clearfix.apply').append('<button type="button" class="btn btn-primary disabled">Applied</button>');
                                $(".pre-loader").css('display','none');
                            }
                            if(data.status == 'validation'){
                                $("#validation_erros").html("");
                                $(data.errors).each(function (a, b) {
                                    $("#validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>");
                                });
                                $(".pre-loader").css('display','none');
                                setTimeout(function(){
                                     $(".pre-loader").css('display','none');
                                }, 500);

                               
                                //return false;
                            }
                            if(data.status=='error'){
                              $('#myModal1').modal('hide');
                              $("#validation_erros").html("");
                              $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> "+data.errorMessage+"</div>").fadeIn(300);
                              $(".pre-loader").css('display','none');
                              $('.modal-backdrop.fade').removeClass('modal-backdrop fade in');
                            }
                            $(".alert").fadeTo(10000,1000).slideUp(1000,function(){$(".alert").slideUp(1000);});
                            $(".pre-loader").css('display','none');
                        },
                        error:function(data){}});
                    return false;
                }
    });
$('#job_apply_form').bootstrapValidator({
    framework:'bootstrap',
    excluded:[':disabled'],
    feedbackIcons:{valid:'glyphicon glyphicon-ok',invalid:'glyphicon glyphicon-remove',validating:'glyphicon glyphicon-refresh'},
    fields:{
        current_salary:{validators:{notEmpty:{message:'Current Salary is required'}
    },regexp: {regexp: /^\d{1,6}(-?)?\d{1,6}$/i, message: "Invalid format."}},
        expected_salary:{validators:{notEmpty:{message:'Expected Salary is required'}},regexp: {regexp: /^\d{1,6}(-?)?\d{1,6}$/i, message: "Invalid format."}},
        freelance_r: {validators: {notEmpty: {message: "Please select weather you are Freelancer or not?"}}},
        freelance_profile: {validators: {notEmpty: {message: "Please enter profile link"}, uri: {message: "The freelance profile link is not valid url"}}},
        freelance_profile2: {validators: {notEmpty: {message: "Please enter 2nd profile link"},different: {field: 'freelance_profile',message: 'The 1st & 2nd profile link cannot be same'} ,uri: {message: "The freelance profile link is not valid url"}}},
        'candidate_skills[]': {validators: {notEmpty: {message: "Please select Skills"}}}
        
//        req_exp:{validators:{notEmpty:{message:'Please select value.'},between: {min: 0,max: 1,message: 'The longitude must be between 0 and 1.'
//                    }}},
//        cov_let:{validators:{notEmpty:{message:'Please enter details.'},stringLength:{
//                        message: 'Max 1000 characters.',
//                        max: function (value, validator, $field) {
//                            return 1000 - (value.match(/\r/g) || []).length;
//                        }},
//                        regexp: {regexp: /^[a-zA-Z0-9&-_,\s]+$/i, message: "Invalid format."}}},
        }, 
    submitHandler:function(validator,form,submitButton){
                    //$(".pre-loader").modal('show');
                    $(".pre-loader").css('display','block');
                    //$("#myModal1").css("z-index","0");
                    var base_url=$('#baseUrl').val();
                    $.ajax({
                        url:base_url+"new_profile_builder/apply_for_job",
                        data:$('#job_apply_form').serialize(),
                        type:"POST",
                        success:function(data){
                            var data=$.parseJSON(data);
                            //$(".pre-loader").modal('hide');
                            $(".pre-loader").css('display','none');
                            //$(".pre-loader").css('display','none');
                            if(data.status=='success'){
                                $("#validation_erros").html("");
                                $('#myModal1').modal('hide');
                                var phoneNo=data.mobileNum;
                                var job_name=$("#job_name").val();
                                $(".notification").html("<div class='alert success_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> "+data.message+" "+job_name+"</div>").fadeIn(300);
                                $('.applyButton').remove();
                                $('.clearfix.apply').append('<button type="button" class="btn btn-primary disabled">Applied</button>');
                                $(".pre-loader").css('display','none');
                            }
                            if(data.status == 'validation'){
                                $("#validation_erros").html("");
                                $(data.errors).each(function (a, b) {
                                    $("#validation_erros").append('<div class="alert-box error"><span>error: </span>' + b + "</div>");
                                });
                                $(".pre-loader").css('display','none');
                                setTimeout(function(){
                                     $(".pre-loader").css('display','none');
                                }, 500);

                               
                                //return false;
                            }
                            if(data.status=='error'){
                              $('#myModal1').modal('hide');
                              $("#validation_erros").html("");
                              $(".notification").html("<div class='alert danger_alert'><a href='#' class='close' "+"data-dismiss='alert' aria-label='close'>&times;"+" </a> "+data.errorMessage+"</div>").fadeIn(300);
                              $(".pre-loader").css('display','none');
                              $('.modal-backdrop.fade').removeClass('modal-backdrop fade in');
                            }
                            $(".alert").fadeTo(10000,1000).slideUp(1000,function(){$(".alert").slideUp(1000);});
                            $(".pre-loader").css('display','none');
                        },
                        error:function(data){}});
                    return false;
                }
    });	
$('#jobSearch').bootstrapValidator({framework:'bootstrap',excluded:[':disabled'],feedbackIcons:{valid:'glyphicon glyphicon-ok',invalid:'glyphicon glyphicon-remove',validating:'glyphicon glyphicon-refresh'},fields:{},submitHandler:function(validator,form,submitButton){var baseUrl=$('#baseUrl').val();$("#loading_modal").modal('show');
        $.ajax({url:baseUrl+"new_recruit/jobFilteredList",data:$('#jobSearch').serialize(),type:"POST",success:function(data){$('#searchBtn').prop('disabled',false);setTimeout(function(){$("#loading_modal").modal('hide');var jsonDecode=$.parseJSON(data);var jobs=jsonDecode.allJobs;var pagination=jsonDecode.pagination;var html='';if(jobs===undefined||jobs.length==0){html+='<li class="job_listing">';html+='<a href="#">Sorry! No Jobs Found</a>';html+='</li>'}else{html=createHtml(jobs);}$('#myTable').DataTable().destroy();$('.job_listingsAjax').html('');$('.job_listingsAjax').html(''+html+'');$('#myTable').DataTable();$('.pagination_link').html('');$('.pagination_link').html(pagination);},1000);},error:function(data){}});return false;}});
$('#myModal1').on('hidden.bs.modal',function(){document.getElementById('job_apply_form').reset();$('#job_apply_form').bootstrapValidator('resetForm',true);});
$(document).ready(function(e){$('.mss').select2();$('#apply_btn').on('click',function(ev){$('#myModal1').css('z-index','999');});$("#Profession").keyup(function(e){if(e.which!=37&&e.which!=38&&e.which!=39&&e.which!=40){if($(this).val()!=''){var url=$('#baseUrl').val();var hit_url=url+'new_recruit/professionIntelligence';$.ajax({type:"POST",url:hit_url,data:'keyword='+$(this).val(),beforeSend:function(){$(".mini-loader").show();},success:function(data){$(".mini-loader").hide();var final=$.parseJSON(data);var html='<ul id="profession-list" tabindex="1" style="height:300px;overflow:auto;">';if(final.status=='success'){$(final.data).each(function(indi,val){html+='<li style="text-align:left;"><a href="#" onClick="selectProfession(`'+val.job_title+'`)">'+val.job_title.trim()+'</a></li>';});html+="</ul>";$("#suggesstion-box").show();$("#suggesstion-box").html(html);$("#Profession").css("background","#FFF");}else{$("#suggesstion-box").html('');$(".mini-loader").hide();}}});}else{$("#suggesstion-box").html('');$(".mini-loader").hide();}}});
    });
function selectProfession(val){$("#Profession").val(val);$("#suggesstion-box").hide();$(".mini-loader").hide();}
function bttonClick(id){
    if(id=="searchBtn"){
        $('#'+id+'').on('click',function(e){$("#suggesstion-box").html('');$("#suggesstion-box").hide();});
    }
}
function clearFilters(key){
    if(key=="title"){
        $('#Profession').val('');
        $('#Profession').attr('placeholder','Looking for...');
        bttonClick('searchBtn');
        $('#searchBtn').trigger('click');
    }
    if(key=="dep"){
        $('select[name="jobDepartment"]').val("Departments").trigger("change");
        bttonClick('searchBtn');
        $('#searchBtn').trigger('click');
    }
    if(key=="loc"){
        $('select[name="jobRegion"]').val("Location").trigger("change");
        bttonClick('searchBtn');
        $('#searchBtn').trigger('click');
    }
}
function getRadioVal1(id){
        if(id == 'freelance_yes'){
            $('#freelance_div').css('display','block');
            $('#freelance_profile').prop('disabled',false);
            $('#freelance_profile2').prop('disabled',false);
            $("#freelance_no").prop('checked', false);
        }
        else if(id == 'freelance_no'){
            $('#freelance_div').css('display','none');
            $('#freelance_profile').prop('disabled',true);
            $('#freelance_profile2').prop('disabled',true);
            $('#freelance_profile').val('');
            $('#freelance_profile2').val('');
            $("#freelance_yes").prop('checked', false);
        }
}
