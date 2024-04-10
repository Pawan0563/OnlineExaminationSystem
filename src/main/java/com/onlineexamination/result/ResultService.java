package com.onlineexamination.result;

import java.util.List;

import com.onlineexamination.Subject.Subject;
import com.onlineexamination.Subject.SubjectRepository;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ResultService {

    private final SubjectRepository subjectRepository;
    private final ResultRepository resultRepository;

    // Constructor injection of repositories
    public ResultService(SubjectRepository subjectRepository, ResultRepository resultRepository) {
        this.subjectRepository = subjectRepository;
        this.resultRepository = resultRepository;
    }

    @Transactional(readOnly = true)
    public List<Result> getAllResults() {
        return (List<Result>) resultRepository.findAll();
    }

    @Transactional
    public Result addNewResult(Result result) {
        // Save Subject first
        Subject savedSubject = subjectRepository.save(result.getSname());

        // Set the saved Subject in the Result entity
        result.setSname(savedSubject);

        // Save Result
        return resultRepository.save(result);
    }

    @Transactional(readOnly = true)
    public List<Result> getAllResultsForStudent(String email) {
        return resultRepository.findByEmailEmail(email);
    }
}
