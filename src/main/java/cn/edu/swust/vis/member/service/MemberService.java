package cn.edu.swust.vis.member.service;

import cn.edu.swust.vis.member.dao.MemberDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by water on 15-2-8.
 */
@Component
public class MemberService {
    @Autowired
    private MemberDAO memberDAO;
}
